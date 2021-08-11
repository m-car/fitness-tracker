const express = require("express");
const mongoose = require("mongoose");
const workout = reuqire("./models/workout.js");

// Create a connection to MongoDB in Heroku if env is set. Else, connect to the
// local MongoDB server and use the database named `dbExample`. The options
// object contains some boilerplate settings. You can research them to see what
// they do, but knowing what each option is for isn't important for now.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
