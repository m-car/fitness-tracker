// import mongoose library
const mongoose = require("mongoose");
const { Schema } = mongoose;
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
  date: {
    type: Date,
    default: Date.now,
  },
  exercises: [
          {
            name: {
              type: String,
              trim: true,
              required: "A name is required",
            },
            
            duration: {
              type: Number,
              unique: true,
              required: "A duration is required",
            },
            distance: {
              type: Number,
              unique: true,
              required: "Did you move at all? required!"
            },
            weight: {
              type: Number,
              unique: true,
              required: "..cmon. this is required",
            },
            reps: {
              type: Number,
              unique: true,
              required: "reps!!!! required",
            },
            sets: {
              type: Number,
              unique: true,
              required: "Almost there how many sets!?",
            },
          }
        ]
  });
  
  // create a constructor function for the Example model by passing it a name
  // (singular, not plural) for the collection and a schema to use. Mongoose
  // will create a collection named "examples" if one doesn't already exist
  // when the first Example document is saved to the database.
  const workout = mongoose.model("workout", workoutSchema);
  
  module.exports = workout;
  