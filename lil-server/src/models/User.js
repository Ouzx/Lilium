const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
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
  forYou: {},
  imgPath: { type: String },
  socialMediaId: { type: mongoose.Schema.Types.ObjectId, ref: "SocialMedia" },
  personalCards: { type: mongoose.Schema.Types.ObjectId, ref: "PersonalCard" },
  swipeCount: Number,
  settings: {},
  type: {
    // 0: normal user //1453: admin
    type: Number,
  },
});

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword) {
  const user = this;
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) return reject(err);
      if (!isMatch) return reject(false);
      resolve(true);
    });
  });
};
mongoose.model("User", userSchema);
