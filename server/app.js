const express = require("express");
const volleyball = require("volleyball");
const app = new express();

//Middleware Start

app
  .use("/", express.json()) //Json parser
  .use(volleyball) //Logging
  .use(express.static("public")) //Static Assets
  .use("/api", require("./routes/api")); //API routes

//Routes
app.get("/", (req, res, next) => res.sendFile("index.html"));

module.exports = app;
