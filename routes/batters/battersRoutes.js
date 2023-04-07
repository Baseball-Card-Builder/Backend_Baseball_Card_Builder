const express = require("express");
const router = express.Router();
const battersCtrl = require("../../controllers/batters/battersController");

router.get("/battersById", battersCtrl.battersById);

module.exports = router;
