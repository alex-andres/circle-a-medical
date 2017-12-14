var express = require("express");
var router = express.Router();

var spreadsheet_controller = require("../controllers/spreadsheet_controller");

router.get("/", spreadsheet_controller.index);

module.exports = router;
