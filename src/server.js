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

import express from "express";
import configViewEngine from "./configs/view-engine";
import initWebRoute from "./route/web";
import initApiRoute from "./route/api";
// import connection from "./configs/connectDB";

require("dotenv").config();
var morgan = require("morgan");

const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log(">> check");
  console.log(req.method);
  next();
});

app.use(morgan("combined"));

// configure to send data from client to server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);
initWebRoute(app);
initApiRoute(app);

//handle 404 not found
app.use((req, res) => {
  return res.render("404-not-found.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
