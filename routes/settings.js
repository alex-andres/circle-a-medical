var express = require("express");
var router = express.Router();

var settings_controller = require("../controllers/settings_controller");

router.get("/", settings_controller.index);

module.exports = router;
