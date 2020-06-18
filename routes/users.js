var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var userShouldBeLoggedIn = require("../guards/userShoudBeLoggedIn");
const db = require("../model/helper");
require("dotenv").config();
const supersecret = process.env.SUPER_SECRET;

// GET all users
const getUsers = (req, res) => {
  db(`SELECT * FROM users;`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
};
router.get("/", getUsers);

// GET one user
router.get("/:id", userShouldBeLoggedIn, function (req, res, next) {
  const { id } = req.params;
  db(`SELECT * FROM users WHERE id = ${id};`)
    .then((results) => {
      res.send(results.data[0]);
    })
    .catch((err) => res.status(500).send(err));
});

// GET PROFILE INFO
// router.get("/profile", userShouldBeLoggedIn, function (req, res, next) {
//   res.send({ msg: `Here is the private data for user ${userId}!` });
// });

// POST a new user into the DB
router.post("/", function (req, res, next) {
  const { firstname, lastname, email, password, username } = req.body;
  db(
    `INSERT INTO users (firstname, lastname, email, password, username) VALUES ("${firstname}", "${lastname}", "${email}", "${password}", "${username}");`
  )
    .then((results) => {
      res.send({ msg: "Your data was inputted correctly!" });
    })
    .catch((err) => res.status(500).send(err));
});

// POST LOGIN
router.post("/login", function (req, res, next) {
  const { username, password } = req.body;
  db(
    `SELECT * FROM users WHERE username = "${username}" AND password = "${password}";`
  ).then((results) => {
    if (results.data.length) {
      console.log("Yes the user is found");
      var token = jwt.sign({ userId: results.data[0].id }, supersecret);
      res.send({ msg: "User OK, here is your token", token });
    } else {
      res.status(404).send({ msg: "User not found!" });
    }
  });
});

// DELETE a user from the DB
router.delete("/:id", function (req, res, next) {
  const { id } = req.params;
  db(`DELETE FROM users WHERE id = ${id}`)
    .then((results) => {
      res.send({ msg: "Your data was deleted correctly!" });
    })
    .catch((err) => res.status(500).send(err));
});
module.exports = router;
