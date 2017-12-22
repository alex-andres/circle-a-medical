var express = require("express");
var router = express.Router();

var wizard_controller = require("../controllers/wizard_controller");
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/:filename', isAuthenticated, wizard_controller.index);

module.exports = router;