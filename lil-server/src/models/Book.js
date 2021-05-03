const mongoose = require("mongoose");
//stackoverflow.com/a/24829503/12923707
const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
    required: true,
  },
  topicId: [
    { required: true, type: mongoose.Schema.Types.ObjectId, ref: "Topic" },
  ],
  authorId: [
    {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
  ],
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
});

mongoose.model("Book", bookSchema);
