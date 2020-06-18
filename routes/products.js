var express = require("express");
var router = express.Router();
const db = require("../model/helper");

// /* GET products filtered by name */
// router.get("/", function (req, res, next) {
//   const { name } = req.query;
//   let query = "";
//   if (name) query = `SELECT * FROM products WHERE name LIKE "%${name}%";`;
//   else query = `SELECT * FROM products;`;
//   db(query)
//     .then((results) => {
//       res.send(results.data);
//     })
//     .catch((err) => res.status(500).send(err));
// });

/* GET products filtered by name */
router.get("/", function (req, res, next) {
  const { name, market_id, seller_id } = req.query;
  let query = "";
  let marketWhere = "";
  let sellerWhere = "";
  if (market_id) {
    marketWhere = ` WHERE market_id = ${market_id}`;
  }
  if (seller_id) {
    sellerWhere = ` WHERE seller_id = ${seller_id}`;
  }

  if (name)
    query = `SELECT p.*, u.lat, u.lng, u.company_name, u.website 
    FROM products AS p 
    LEFT JOIN users AS u ON u.id = p.seller_id 
    WHERE p.name LIKE "%${name}%";`;
  else
    query = `SELECT DISTINCT p.*, u.lat, u.lng, u.company_name, u.website  
    FROM users_markets AS um 
    LEFT JOIN users AS u ON u.id = um.user_id 
    RIGHT JOIN products AS p ON p.seller_id = um.user_id
    ${marketWhere} ${sellerWhere};`;
  console.log(query);
  db(query)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

// /* GET products listing. */
// router.get("/:id", function (req, res, next) {
//   const { id } = req.params;
//   db(`SELECT * FROM products where id = ${id};`)
//     .then((results) => {
//       res.send(results.data);
//     })
//     .catch((err) => res.status(500).send(err));
// });

/* GET products listing. */
router.get("/:id/", function (req, res, next) {
  const { id } = req.params;
  db(
    `SELECT p.*, u.lat, u.lng, u.company_name, u.website  FROM products AS p 
    LEFT JOIN users AS u ON u.id = p.seller_id 
    WHERE p.id = ${id};`
  )
    .then((results) => {
      res.send(results.data[0]);
    })
    .catch((err) => res.status(500).send(err));
});

/* POST product listing. */
router.post("/", function (req, res, next) {
  const {
    name,
    unit_price,
    units,
    description,
    tax_code,
    seller_id,
    isPerishable,
    shelf_life_count,
    shelf_life_units,
  } = req.body;
  db(
    `INSERT INTO products (name,	unit_price,	units,	description,	tax_code,	seller_id,	isPerishable,	shelf_life_count,	shelf_life_units) 
    VALUES ("${name}",	"${unit_price}",	"${units}",	"${description}", "${tax_code}", "${seller_id}",
    "${isPerishable}", "${shelf_life_count}", "${shelf_life_units}");`
  )
    .then((results) =>
      res.send({
        msg: `${name} added.`,
      })
    )
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
