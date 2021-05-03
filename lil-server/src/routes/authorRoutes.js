const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Author = mongoose.model("Author");

const router = express.Router();
router.use(requireAuth);

router.get("/author", async (req, res) => {
  if (!req.query.id) return res.status(422).send("You must provide id!");
  try {
    await Author.find({ _id: req.query.id }, (err, result) => {
      if (err) return res.status(422).send(err);
      return res.send(result);
    }); //.limit(req.query.limit);
  } catch (err) {
    res.status(422).send(err);
  }
});

router.get("/author/search", async (req, res) => {
  if (!req.query.q)
    return res.status(422).send("You must provide search term!");
  try {
    await Author.find(
      { name: { $regex: ".*" + req.query.q + ".*", $options: "i" } },
      (err, result) => {
        if (err) return res.status(422).send(err);
        return res.send(result);
      }
    );
  } catch (err) {
    res.status(422).send(err);
  }
});

router.post("/author/add", async (req, res) => {
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

router.post("/author/update", async (req, res) => {
  if (req.user.amdin != "1453")
    return res
      .status(403)
      .send({ error: "You dont have privilege for this action." });
  try {
    await Author.findByIdAndUpdate(req.query.id, req.body, (err, result) => {
      if (err) return res.status(422).send(err);
      return res.status(200).send("Author updated!");
    });
  } catch (err) {
    res.status(422).send(err);
  }
});

router.post("/author/delete", async (req, res) => {
  if (req.user.amdin != "1453")
    return res
      .status(403)
      .send({ error: "You dont have privilege for this action." });
  try {
    await Author.findByIdAndDelete(req.query.id, req.body, (err, result) => {
      if (err) return res.status(422).send(err);
      return res.status(200).send("Author deleted!");
    });
  } catch (err) {
    res.status(422).send(err);
  }
});

module.exports = router;
