var jwt = require("jsonwebtoken");
require("dotenv").config();

const supersecret = process.env.SUPER_SECRET;

function userShouldBeLoggedIn(req, res, next) {
  const token = req.headers["x-access-token"];
  if (!token) {
    res.status(401).send({ message: "Please log in!" });
  } else {
    jwt.verify(token, supersecret, function (err, decoded) {
      if (err) res.status(401).send({ message: err.message });
      else {
        const { userId } = decoded;
        next();
        req.userId = userId;
      }
    });
  }
}

module.exports = userShouldBeLoggedIn;
