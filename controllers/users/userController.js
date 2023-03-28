const bcrypt = require("bcrypt");
const knex = require("../../db/knex");
const auth = require("../../middleware/auth");

const saltRounds = 10;
/* respond to a post request to API_URL/user/signup */
const signup = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    if (!(email && password && username)) {
      res.status(400).send("All input is required");
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(409).send("User already exists. Please log in.")
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const userArray = await knex("users")
      .returning(["id", "username", "email"])
      .insert({
        email,
        password: hashedPassword,
        username,
      });

    const token = auth.createToken(userArray[0].id);

    const loginObject = {
      token,
      username: userArray[0].username,
      email: userArray[0].email,
    };

    return res.status(201).json(loginObject);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  signup,
};
