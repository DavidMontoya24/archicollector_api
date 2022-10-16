const knex = require("knex");

const connectedKnex = knex({
  client: "sqlite3",
  connection: {
    filename: "./db/buildings.db",
  },
  useNullAsDefault: true,
});

module.exports = connectedKnex;
