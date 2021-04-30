require("./models/User");

const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require('body-parser'); // deprecated
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(authRoutes);

// mongoose
const mongoUri =
  "mongodb+srv://admin:admin@cluster0.d0qey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.log("Error connecting to mongo", err);
});
// ~mongoose

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
