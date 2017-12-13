var User = require('../models/User');


//this is the users_controller.js file
exports.authPage = function(req,res) {
	console.log('hi')
};

exports.signOutUser = function(req,res) {
  req.logout();
  res.redirect("/");
};

// login
exports.loginUser = function(req, res) {
  res.json();
};