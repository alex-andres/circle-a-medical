var express = require('express');
var router  = express.Router();

var isAuthenticated = require("../config/middleware/isAuthenticated");
var inventory_controller = require("../controllers/inventory_controller");

router.get("/", isAuthenticated, inventory_controller.index);

module.exports = router;
