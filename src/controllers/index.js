const knex = require("./knex");

const getBuildings = async (req, res) => {
  const response = await knex.raw("SELECT * FROM buildings");
  res.json(response);
};

module.exports = {
  getBuildings,
};
