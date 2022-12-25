// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("run request...");
//   res.setHeader("Content-Type", "text/html");
//   res.write("<h3> Hello world! </h3>");
//   res.write("<h2> from Local host </h2>");
//   res.end();
// });

// server.listen(3000, "localhost", () => {
//   console.log("Node.JS server is running on port: 3000");
// });

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! My name is ...");
});

app.get("/about", (req, res) => {
  res.send("I'm Selina");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
