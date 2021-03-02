const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require("path");

// path to serve static files
app.use(express.static(path.join(__dirname, "../client/")));

// home page url
app.get("/", (req, res) => {
  res.sendFile(__dirname + "../client/index.html");
});

io.on("connection", (socket) => {
  socket.on("check_even", (value) => {
    console.log("Received value is: " + value);
    let isEven = false;
    // validate received value
    if (value && !isNaN(value) && parseInt(value) % 2 == 0) {
      isEven = true;
    }
    // emit an object with number and boolean value
    io.emit("even_number", { value: value, isEven: isEven });
  });
});

http.listen(3000, () => {
  console.log("listening on port 3000");
});
