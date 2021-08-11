const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const workout = require("./models/workout.js");
const routes = require("./public/api.js")
const PORT = process.env.PORT || 3000;

//  
const app = express();

app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  