const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

const app = express();
app.use(express.json());
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
const jwt = require("jsonwebtoken");

mongoose
  .connect(
    `mongodb+srv://shekharshine25:${encodeURIComponent(
      "Subh@9899"
    )}@atlascluster.z7tuska.mongodb.net/`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("Server running at port 8000");
});

const User = require("./models/user");
const Message = require("./models/message");

app.post("/register", (req, res) => {
  console.log(req.body);
  const { name, email, password, image } = req.body;

  const newUser = new User({ name, email, password, image });

  newUser
    .save()
    .then(() => {
      res.status(200).json({ message: "User registered successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error registering the user!" });
    });
});

app.get("/getname", (req, res) => {
  res.status(200).json({ message: "error" });
});
