// Models
require("./models/User");
require("./models/PersonalCard");
require("./models/SocialMedia");
require("./models/Story");
require("./models/Author");
require("./models/Topic");
require("./models/Book");
// ~Models

const express = require("express");
const mongoose = require("mongoose");

// Routes
const authRoutes = require("./routes/authRoutes");
const authorRoutes = require("./routes/authorRoutes");
const bookRoutes = require("./routes/bookRoutes");
const topicRoutes = require("./routes/topicRoutes");
// ~Routes

const requireAuth = require("./middlewares/requireAuth");

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(authRoutes);

app.use(authorRoutes);
app.use(bookRoutes);
app.use(topicRoutes);

// mongoose
const mongoUri =
  "mongodb+srv://admin:admin@cluster0.d0qey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.log("Error connecting to mongo", err);
});
// ~mongoose

// app.get("/:id", requireAuth, (req, res) => {
//   // res.send(`Your email: ${req.user.email}`);
//   res.send(req.params.id);
// });

app.get("/", requireAuth, (req, res) => {
  // res.send(`Your email: ${req.user.email}`);
  res.send(req.user.amdin);
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
