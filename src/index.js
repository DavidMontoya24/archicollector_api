const express = require("express");
const app = express();
const cors = require("cors");
let port = process.env.PORT || 8000;

//midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use(require("./routes/index"));

app.listen(port, () => console.log(`server listening on port ${port}`));
