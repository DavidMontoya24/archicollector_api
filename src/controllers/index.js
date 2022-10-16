const knex = require("./knex");

const getBuildings = async (req, res) => {
  const response = await knex.raw("SELECT * FROM buildings");
  res.json(response);
};

const createBuildings = async (req, res) => {
  const { name, year, author, location, description } = req.body;
  const response = await knex("buildings").insert({
    name: name,
    year: year,
    author: author,
    location: location,
    description: description,
  });
  res.send("Building created successfully");
};

const showBuilding = async (req, res) => {
  const id = req.params.id;
  const response = await knex("buildings").where("id", id);
  res.json(response);
};

const deleteBuilding = async (req, res) => {
  const id = req.params.id;
  const response = await knex("buildings").where("id", id).del();
  console.log(response);
  res.json(`building ${id} deleted successfully`);
};

const updateBuilding = async (req, res) => {
  const id = req.params.id;
  const { name, year, author, location, description } = req.body;
  const response = await knex("buildings").where("id", id).update({
    name: name,
    year: year,
    author: author,
    location: location,
    description: description,
  });
  res.json(`building ${id} updated successfully`);
};

module.exports = {
  getBuildings,
  createBuildings,
  showBuilding,
  deleteBuilding,
  updateBuilding,
};
