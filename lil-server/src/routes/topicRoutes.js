const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Topic = mongoose.model("Topic");

const router = express.Router();
router.use(requireAuth);

router.get("/topic", async (req, res) => {
  if (!req.query.id) return res.status(422).send("You must provide id!");
  try {
    await Topic.find({ _id: req.query.id }, (err, result) => {
      if (err) return res.status(422).send(err);
      res.send(result);
    }); //.limit(req.query.limit);
  } catch (err) {
    return res.status(422).send(err);
  }
});

router.get("/topic/search", async (req, res) => {
  if (!req.query.q)
    return res.status(422).send("You must provide search term!");
  try {
    await Topic.find(
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

router.post("/topic/add", async (req, res) => {
  if (req.user.amdin != "1453")
    return res
      .status(403)
      .send({ error: "You dont have privilege for this action." });

  try {
    const topic = new Topic(req.body);
    await topic.save();
    res.send({ Topic: topic._id });
  } catch (err) {
    return res.status(422).send(err);
  }
});

router.post("/topic/update", async (req, res) => {
  if (req.user.amdin != "1453")
    return res
      .status(403)
      .send({ error: "You dont have privilege for this action." });
  try {
    await Topic.findByIdAndUpdate(req.query.id, req.body, (err, result) => {
      if (err) return res.status(422).send(err);
      res.status(200).send("Topic updated!");
    });
  } catch (err) {
    return res.status(422).send(err);
  }
});

router.post("/topic/delete", async (req, res) => {
  if (req.user.amdin != "1453")
    return res
      .status(403)
      .send({ error: "You dont have privilege for this action." });
  try {
    await Topic.findByIdAndDelete(req.query.id, req.body, (err, result) => {
      if (err) return res.status(422).send(err);
      res.status(200).send("Topic deleted!");
    });
  } catch (err) {
    return res.status(422).send(err);
  }
});

module.exports = router;
