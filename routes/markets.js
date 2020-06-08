var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET markets listing. */
router.get("/", function (req, res) {
  console.log("Inside get request! ");
  db(`SELECT * FROM markets;`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

/* POST market listing. */
router.post("/", function (req, res) {
  const {
    name,
    email,
    address1,
    postcode,
    city,
    location,
    company_name,
    company_no,
    tel_no,
    mob_no,
    day,
    start_time,
    end_time,
    website,
  } = req.body;
  db(
    `INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website) 
    VALUES (${name}, ${email}, ${address1}, ${postcode}, ${city}, ${location}, ${company_name}, ${company_no},  ${tel_no},  ${mob_no}, ${day}, ${start_time}, ${end_time}, ${website});`
  )
    .then((results) =>
      res.send({
        msg: `${name} added.`,
      })
    )
    .catch((err) => res.status(500).send(err));
});
module.exports = router;