const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
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
  topicId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
    },
  ],
  bookCount: Number,
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
  socialMediaId: { type: mongoose.Schema.Types.ObjectId, ref: "SocialMedia" },
});

mongoose.model("Author", authorSchema);
