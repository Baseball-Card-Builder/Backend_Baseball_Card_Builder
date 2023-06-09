const bcrypt = require("bcrypt");
const knex = require("../../db/knex");
const auth = require("../../middleware/auth");

const saltRounds = 10;
/* respond to a post request to API_URL/user/signup */
const signup = async (req, res) => {
  try {
    const { password, email } = req.body;

    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const userArray = await knex("users").returning("*").insert({
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    const token = auth.createToken(userArray[0].id);
    userArray.token = token;

    return res.status(201).send(json(userArray));
  } catch (error) {
    return error;
  }
};
/* */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    const userArray = await knex
      .select(["id", "email", "password"])
      .from("users")
      .where({ email });

    if (!userArray.length) {
      return res.status(404).send("Email does not exist");
    }

    const isValidPassword = await bcrypt.compare(
      password,
      userArray[0].password
    );

    if (!isValidPassword) return res.status(401).send("Incorrect password");

    const token = auth.createToken(userArray[0].id);

    const loginObject = {
      token,
      email: userArray[0].email,
    };

    return res.status(200).json(loginObject);
  } catch (error) {
    return error;
  }
};

module.exports = {
  signup,
  login,
};
