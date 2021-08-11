// import mongoose library
const mongoose = require("mongoose");

// Construct as schema for an Example document.
const workoutSchema = new mongoose.Schema({
  // Mongoose allows use of built-in types from javascript as well as other
  // types included in the library.
  // (https://mongoosejs.com/docs/schematypes.html) See the documentation on
  // Schema Types for a full list of options for defining each "path" (like a
  // field in SQL) in a schema.

  // //   type: 'resistance',
  // name: 'Bicep Curl',
  // duration: 20,
  // weight: 100,
  // reps: 10,
  // sets: 4,
  string: {
    type: String,
    trim: true,
    required: "String is Required",
  },

  number: {
    type: Number,
    unique: true,
    required: true,
  },

  //   boolean: Boolean,

  //   array: Array,

  date: {
    type: Date,
    default: Date.now,
  },
});

// create a constructor function for the Example model by passing it a name
// (singular, not plural) for the collection and a schema to use. Mongoose
// will create a collection named "examples" if one doesn't already exist
// when the first Example document is saved to the database.
const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
