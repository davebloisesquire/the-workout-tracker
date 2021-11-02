// Required External Package Import
const express = require("express");
const mongojs = require("mongojs");
const logger = require('morgan');

// Database initial setup
const databaseUrl = "workout-tracker";
const collections = ["workouts"];
const db = mongojs(databaseUrl, collections);

// Express instance
const app = express();

// Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Logs DB errors to log
db.on("error", error => {
  console.log("Database Error:", error);
});
