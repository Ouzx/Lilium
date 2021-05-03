const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  text: {
    type: String,
    default: "",
  },
});

const storySchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BookSchema",
  },
  content: [cardSchema],
  contentLength: Number,
});

mongoose.model("Story", storySchema);
