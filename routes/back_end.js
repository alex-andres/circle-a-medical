var express = require("express");
var router = express.Router();

var application_controller = require("../controllers/back_end_controller");

router.post("/upload", application_controller.index);

module.exports = router;
