//JWT verification
require('dotenv').config({ path: '../../.env' });
const jwt = require("jsonwebtoken");

const createToken = (userid) => {
    const token = jwt.sign(
        { userid },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "2h" }
    );
        return token;
}

module.exports = {
    createToken,
}
