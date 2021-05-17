const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Story = mongoose.model("Story");

const router = express.Router();
router.use(requireAuth);

router.get("/story", async (req, res) => {
  if (!req.query.id) return res.status(422).send("You must provide id!");
  try {
    await Story.findById(req.query.id, (err, result) => {
      if (err) return res.status(422).send(err);
      res.send(result);
    });
  } catch (err) {
    return res.status(422).send(err);
  }
});

router.post("/story/add", async (req, res) => {
  if (req.user.amdin != "1453")
    return res
      .status(403)
      .send({ error: "You dont have privilege for this action." });

  try {
    const story = new Story(req.body);
    await story.save();
    res.send({ Story: story._id });
  } catch (err) {
    return res.status(422).send(err);
  }
});

// router.post("/story/update", async (req, res) => {
//   if (req.user.amdin != "1453")
//     return res
//       .status(403)
//       .send({ error: "You dont have privilege for this action." });
//   try {
//     await Story.findByIdAndUpdate(req.query.id, req.body, (err, result) => {
//       if (err) return res.status(422).send(err);
//       res.status(200).send("Story updated!");
//     });
//   } catch (err) {
//     return res.status(422).send(err);
//   }
// });

router.post("/story/delete", async (req, res) => {
  if (req.user.amdin != "1453")
    return res
      .status(403)
      .send({ error: "You dont have privilege for this action." });
  try {
    await Story.findByIdAndDelete(req.query.id, req.body, (err, result) => {
      if (err) return res.status(422).send(err);
      res.status(200).send("Story deleted!");
    });
  } catch (err) {
    return res.status(422).send(err);
  }
});

module.exports = router;
