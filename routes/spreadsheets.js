var express = require("express");
var router = express.Router();

var spreadsheets_controller = require("../controllers/spreadsheets_controller");

router.get("/spreadsheets", spreadsheets_controller.index);

module.exports = router;
