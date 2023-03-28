//JWT verification
require("dotenv").config({ path: "../../.env" });
const jwt = require("jsonwebtoken");

const createToken = (userid) => {
  const token = jwt.sign({ userid }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "2h",
  });
  return token;
};

const authenticateToken = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.sendStatus(401);
    }
    const token = req.headers.authorization.split(" ")[1];
    const { userid } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (userid) {
      req.body.userid = userid;
      return next();
    }
    return res.sendStatus(401);
  } catch (error) {
    return error;
  }
};

module.exports = {
  createToken,
  authenticateToken,
};
