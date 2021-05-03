const mongoose = require("mongoose");

const socaialMediaSchema = new mongoose.Schema({
  twitter: {
    type: String,
  },
  facebook: {
    type: String,
  },
  instagram: {
    type: String,
  },
});

mongoose.model("SocialMedia", socaialMediaSchema);
