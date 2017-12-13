var express = require('express');
var router  = express.Router();

var passport = require("../config/passport");
var users_controller = require('../controllers/users_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/auth', users_controller.authPage);

router.get('/sign-out', users_controller.signOutUser);

router.get('/', function(req, res) {
    // res.render('login.html')
})

router.post('/login', passport.authenticate("local"), users_controller.loginUser);

// router.post('/login', function(req, res) {
//     console.log('hi')
// });

// router.post('/signup', users_controller.signUpUser);

module.exports = router;