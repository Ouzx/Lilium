const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Author = mongoose.model("Author");

const router = express.Router();
router.use(requireAuth);

router.post("/add/author", async (req, res) => {
  if (req.user.amdin != "1453")
    return res
      .status(403)
      .send({ error: "You dont have privilege for this action." });

  try {
    const author = new Author(req.body);
    await author.save();
    res.send({ Author: author._id });
  } catch (err) {
    res.status(422).send(err);
  }
});

module.exports = router;
