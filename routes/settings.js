var express = require("express");
var router = express.Router();

var settings_controller = require("../controllers/settings_controller");
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", isAuthenticated, settings_controller.index);

module.exports = router;
