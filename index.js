import express from "express";
import serverless from "serverless-http";

const app = express();

// Define your routes
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Wrap the app for serverless functions
module.exports.handler = serverless(app);
