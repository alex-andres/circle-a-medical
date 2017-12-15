var express = require('express');
var router = express.Router();

var application_controller = require('../controllers/back_end_controller');

router.post('/', application_controller.index);

router.get('/xlsx/:filename', (req, res) => {
    let filePath = `uploads/${req.params.filename}`;
    res.download(filePath);
});

router.get('/json/:filename', (req, res) => {
    let filePath = `uploads/${req.params.filename}`;
    res.download(filePath);
});

router.get('/', function(req, res) {
    res.render('login.html')
});

module.exports = router;