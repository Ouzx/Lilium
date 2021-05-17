const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Book = mongoose.model("Book");

const router = express.Router();
router.use(requireAuth);

router.get("/book", async (req, res) => {
  if (!req.query.id) return res.status(422).send("You must provide id!");
  try {
    await Book.find({ _id: req.query.id }, (err, result) => {
      if (err) return res.status(422).send(err);
      res.send(result);
    }); //.limit(req.query.limit);
  } catch (err) {
    return res.status(422).send(err);
  }
});

router.get("/book/search", async (req, res) => {
  if (!req.query.q)
    return res.status(422).send("You must provide search term!");
  try {
    await Book.find(
      { name: { $regex: ".*" + req.query.q + ".*", $options: "i" } },
      (err, result) => {
        if (err) return res.status(422).send(err);
        res.send(result);
      }
    );
  } catch (err) {
    return res.status(422).send(err);
  }
});

router.post("/book/add", async (req, res) => {
  if (req.user.amdin != "1453")
    return res
      .status(403)
      .send({ error: "You dont have privilege for this action." });

  try {
    const book = new Book(req.body);
    await book.save();
    res.send({ Book: book._id });
  } catch (err) {
    return res.status(422).send(err);
  }
});

router.post("/book/update", async (req, res) => {
  if (req.user.amdin != "1453")
    return res
      .status(403)
      .send({ error: "You dont have privilege for this action." });
  try {
    await Book.findByIdAndUpdate(req.query.id, req.body, (err, result) => {
      if (err) return res.status(422).send(err);
      res.status(200).send("Book updated!");
    });
  } catch (err) {
    return res.status(422).send(err);
  }
});

router.post("/book/delete", async (req, res) => {
  if (req.user.amdin != "1453")
    return res
      .status(403)
      .send({ error: "You dont have privilege for this action." });
  try {
    await Book.findByIdAndDelete(req.query.id, req.body, (err, result) => {
      if (err) return res.status(422).send(err);
      res.status(200).send("Book deleted!");
    });
  } catch (err) {
    return res.status(422).send(err);
  }
});

module.exports = router;
