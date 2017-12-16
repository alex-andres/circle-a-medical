var express = require("express");
var router = express.Router();

var spreadsheets_controller = require("../controllers/spreadsheets_controller");
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/', isAuthenticated, spreadsheets_controller.index);

module.exports = router;