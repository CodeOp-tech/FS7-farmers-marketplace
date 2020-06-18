var express = require("express");
var router = express.Router();

const db = require("../model/helper");
require("dotenv").config();

// GET all users
const getSuppliers = (req, res) => {
  db(`SELECT * FROM users;`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
};
router.get("/", getSuppliers);

// GET one user
router.get("/:id", function (req, res, next) {
  const { id } = req.params;

  db(`SELECT * FROM users WHERE id = ${id};`)
    .then((results) => {
      res.send(results.data[0]);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
