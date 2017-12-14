var express = require("express");
var router = express.Router();

var wizard_controller = require("../controllers/wizard_controller");

router.get("/process_wizard", wizard_controller.index);

module.exports = router;
