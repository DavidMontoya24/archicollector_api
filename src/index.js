const express = require("express");
const app = express();
const db = require("./controllers");

//midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(require("./routes/index"));

app.listen(8000, () => console.log("server listening on port 8000"));
