var User = require("../models/User");

//this is the users_controller.js file
// exports.authPage = function(req, res) {
//   console.log("hi");
// };

exports.signOutUser = function(req, res) {
  req.logout();
  res.redirect("/");
};

// login
exports.loginUser = function(req, res) {
  res.json("/");
};

exports.signUpUser = function(req, res) {
  var newUser = new User();

  newUser.username = "akspellm";
  newUser.password = newUser.generateHash("CodeDragons2017");

  newUser
    .save()
    .then(function() {
      res.send({ redirect: "/" });
    })
    .catch(function(err) {
      res.json(err);
    });
};
