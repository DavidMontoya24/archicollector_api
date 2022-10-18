const express = require("express");
const app = express();
const cors = require("cors");

//midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use(require("./routes/index"));

app.listen(8000, () => console.log("server listening on port 8000"));
