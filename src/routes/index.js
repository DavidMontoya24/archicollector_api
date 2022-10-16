const { Router } = require("express");
const router = Router();

const {
  getBuildings,
  createBuildings,
  showBuilding,
  deleteBuilding,
  updateBuilding,
} = require("../controllers");

router.get("/buildings", getBuildings);
router.post("/buildings", createBuildings);
router.get("/buildings/:id", showBuilding);
router.delete("/buildings/:id", deleteBuilding);
router.patch("/buildings/:id", updateBuilding);

module.exports = router;
