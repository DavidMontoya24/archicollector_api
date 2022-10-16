const { Router } = require("express");
const router = Router();

const { getBuildings } = require("../controllers");

router.get("/buildings", getBuildings);

module.exports = router;
