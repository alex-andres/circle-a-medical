var express = require("express");
var router = express.Router();

var login_controller = require("../controllers/login_controller");

router.get("/", login_controller.index);

module.exports = router;
