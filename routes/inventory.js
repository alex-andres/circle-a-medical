var express = require("express");
var router = express.Router();

var inventory_search_results_controller = require("../controllers/inventory_controller");

router.get("/", inventory_controller.index);

module.exports = router;
