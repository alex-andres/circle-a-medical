var express = require('express');
var router = express.Router();

var application_controller = require('../controllers/back_end_controller');

router.post('/', application_controller.index);

router.get('/', function(req, res) {
    res.render('login.html')
});

module.exports = router;