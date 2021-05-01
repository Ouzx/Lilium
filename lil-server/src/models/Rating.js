const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  likes: Number,
  dislikes: Number,
  total: Number,
});

mongoose.model("Rating", ratingSchema);
