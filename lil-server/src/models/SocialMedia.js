const mongoose = require("mongoose");

const socaialMediaSchema = new mongoose.Schema({
  twitter: {
    type: String,
    default: "",
  },
  facebook: {
    type: String,
    default: "",
  },
  instagram: {
    type: String,
    default: "",
  },
});

mongoose.model("SocialMedia", socaialMediaSchema);
