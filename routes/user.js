var express = require('express');
var router  = express.Router();

var passport = require("../config/passport");
var users_controller = require('../controllers/users_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");


var login_controller = require("../controllers/login_controller");

router.get("/", login_controller.index);

router.get('/sign-out', users_controller.signOutUser);

router.post('/login', passport.authenticate("local", { failureRedirect: '/login', failureFlash : true }), users_controller.loginUser);

router.post('/signup', users_controller.signUpUser);

module.exports = router;