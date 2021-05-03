const mongoose = require("mongoose");
const readerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  bookId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
  followingTopicId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
    },
  ],
  followingAuthorsId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Author" }],
  followingTopicId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Topic" }],
  forYou: {},
  imgPath: { type: String },
  socialMediaId: { type: mongoose.Schema.Types.ObjectId, ref: "SocialMedia" },
  personalCards: { type: mongoose.Schema.Types.ObjectId, ref: "PersonalCard" },
  swipeCount: {
    type: Number,
    default: 0,
  },
  settings: {},
});
mongoose.model("Reader", readerSchema);
