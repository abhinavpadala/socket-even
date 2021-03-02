// var http = require("http");
// var fs = require("fs");

// const PORT = 8080;

// fs.readFile("./SpecRunner.html", function (err, html) {
//   if (err) throw err;

//   http
//     .createServer(function (request, response) {
//       response.writeHeader(200, { "Content-Type": "text/html" });
//       response.write(html);
//       response.end();
//     })
//     .listen(PORT);
// });

var http = require("http");
var fs = require("fs");
var index = fs.readFileSync("./SpecRunner.html");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(index);
  })
  .listen(8080);
