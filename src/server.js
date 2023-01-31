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

// const express = require("express");
import express from "express";
import configViewEngine from "./configs/view-engine";
import initWebRoute from "./route/web";
// import connection from "./configs/connectDB";

require("dotenv").config();

const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

configViewEngine(app);
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
