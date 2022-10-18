const { isNatural } = require("../utils/utils");
const knex = require("./knex");

const getBuildings = async (req, res) => {
  const response = await knex.raw("SELECT * FROM buildings");
  res.status(200).json(response);
};

const createBuildings = async (req, res) => {
  const { name, year, author, location, description, image } = req.body;
  const data = {
    name: name,
    year: year,
    author: author,
    location: location,
    description: description,
    image: image,
  };
  for (const key in data) {
    if (!data[key]) {
      res
        .status(400)
        .send({ status: "FAILED", data: `Please provide a ${key}` });
      return;
    }
  }
  if (!isNatural(year)) {
    res
      .status(400)
      .send({ status: "FAILED", data: "Please provide a valid year" });
    return;
  }
  if (description.length > 500 || description.length < 100) {
    res.status(400).send({
      status: "FAILED",
      data: "Please provide a better description. Minimun 100 characters and Maximun 500 characters",
    });
    return;
  }
  const response = await knex("buildings").insert(data);
  res.status(201).send("Building created successfully");
};

const showBuilding = async (req, res) => {
  const id = req.params.id;
  const response = await knex("buildings").where("id", id);
  res.status(200).json(response[0]);
};

const deleteBuilding = async (req, res) => {
  const id = req.params.id;
  const response = await knex("buildings").where("id", id).del();
  console.log(response);
  res.status(200).json(`building ${id} deleted successfully`);
};

const updateBuilding = async (req, res) => {
  const id = req.params.id;
  const { name, year, author, location, description } = req.body;
  const data = {
    name: name,
    year: year,
    author: author,
    location: location,
    description: description,
  };
  for (const key in data) {
    if (!data[key]) {
      res
        .status(400)
        .send({ status: "FAILED", data: `Please provide a ${key}` });
      return;
    }
  }
  if (!isNatural(year)) {
    res
      .status(400)
      .send({ status: "FAILED", data: "Please provide a valid year" });
    return;
  }
  if (description.length > 500 || description.length < 100) {
    res.status(400).send({
      status: "FAILED",
      data: "Please provide a better description. Minimun 100 characters and Maximun 500 characters",
    });
    return;
  }
  const response = await knex("buildings").where("id", id).update(data);
  res.status(200).json(`Updated successfully`);
};

module.exports = {
  getBuildings,
  createBuildings,
  showBuilding,
  deleteBuilding,
  updateBuilding,
};
