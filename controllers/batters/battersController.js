const knex = require("../../db/knex");

const battersById = async (req, res) => {
  const { userid } = req.body;
  try {
    const result = await knex("batters")
      .select("*")
      .from("batters")
      .where({ "batters.user_id": userid });

    if (!result.length) {
      return res.status(404).json({ message: "id not found" });
    }
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  battersById,
};
