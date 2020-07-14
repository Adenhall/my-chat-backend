const app = require("express")();
require("dotenv").config({ path: ".env" });
const http = require("http").createServer(app);

const io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("sendMessage", (input) => {
    console.log("message: ", input);
    io.emit("message", input);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});


http.listen(process.env.PORT, () => {
  console.log("App is connected to port ", process.env.PORT);
});
