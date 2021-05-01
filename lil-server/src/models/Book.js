const mongoose = require("mongoose");
//stackoverflow.com/a/24829503/12923707
const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
    required: true,
  },
  topicId: [], // TODO: TOPIC SCHEMA
  authorId: [], // TODO: AUTHOR SCHEMA
  pageCount: Number, // TODO: Edit this with cards array
  ratingId: {}, // TODO: RATIMG SCHEMA
  descriptions: [
    {
      type: String,
    },
  ],
  colors: [{ type: String }], // RGBA STRING
  imgPaths: [{ type: String }],
});

mongoose.model("BookSchema", bookSchema);
