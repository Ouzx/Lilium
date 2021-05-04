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
  rating: { likes: Number, dislikes: Number },
  descriptions: [
    {
      type: String,
    },
  ],
  colors: [{ type: String }], // RGBA STRING
  imgPaths: [{ type: String }],
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reader" }],
});

mongoose.model("Topic", topicSchema);
