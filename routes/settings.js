var express = require("express");
var router = express.Router();

var settings_controller = require("../controllers/settings_controller");

router.get("/settings", settings_controller.index);

module.exports = router;
