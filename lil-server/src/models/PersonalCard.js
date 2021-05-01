const mongoose = require("mongoose");

const highlightIndexSchema = new mongoose.Schema({
  start: Number,
  end: Number,
});

const personalCardSchema = new mongoose.Schema({
  text: {
    type: String,
    default: "",
  },
  highlight: [highlightIndexSchema],
});

mongoose.model("PersonalCard", personalCardSchema);
