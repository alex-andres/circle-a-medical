var express = require("express");
var router = express.Router();

var wizard_controller = require("../controllers/wizard_controller");

router.get("/", wizard_controller.index);

module.exports = router;
