const sqlite3 = require("sqlite3").verbose();
const fetch = require("node-fetch");
const fs = require("fs");

const db = new sqlite3.Database(
  "./db/buildings.db",
  sqlite3.OPEN_READWRITE,
  (error) => {
    if (error) return console.error(error.message);

    console.log("Conection successfull");
  }
);

db.run(
  "CREATE TABLE IF NOT EXISTS buildings(id INTEGER PRIMARY KEY, name, year INTEGER, author, location, description, image)",
  (error) => {
    if (error) return console.error(error);

    console.log("Database created...");
  }
);

const data = fs.readFileSync("./db/seed.json");
const parsedData = JSON.parse(data);

const inputValues =
  "INSERT INTO buildings (name, year, author, location, description, image) VALUES(?, ?, ?, ?, ?, ?)";

parsedData.forEach((element) => {
  const { name, year, author, location, description, image } = element;
  db.run(
    inputValues,
    [name, year, author, location, description, image],
    (error) => {
      if (error) return console.error(error);

      console.log("New row created succesfully!!...");
    }
  );
});

db.close((error) => {
  if (error) return console.error(error.message);
});
