const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
    required: true,
  },
  bookId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
  authorId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
  ],
  bookCount: Number,
  authorCount: Number,
  ratingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rating",
  },
  descriptions: [
    {
      type: String,
    },
  ],
  colors: [{ type: String }], // RGBA STRING
  imgPaths: [{ type: String }],
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

mongoose.model("Topic", topicSchema);
