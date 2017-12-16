var User = require("../models/User");

//this is the users_controller.js file
exports.authPage = function(req, res) {
  res.render('login', { user: req.username, message : req.flash('error') })
};

exports.signOutUser = function(req, res) {
  req.logout();
  res.redirect("/");
};

// login
exports.loginUser = function(req, res) {
  res.json('/inventory');
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



  // User.findOne({ 'username' :  req.body.username }, function(err, user) {

  //   // check to see if theres already a user with that email
  //   if (user) {
  //       res.send({
  //         duplicateUser: true
  //       })
  //   } else {

  //       // if there is no user with that email
  //       // create the user
  //       var newUser            = new User();

  //       // set the user's local credentials
  //       newUser.username    = req.body.username;
  //       newUser.email       = req.body.email;
  //       newUser.password    = newUser.generateHash(req.body.password);

  //       // save the user
  //       newUser.save()
  //         .then(function() {
  //         res.send({redirect: '/inventory'});
  //       }).catch(function(err) {
  //         res.json(err);
  //       });
  //   }

  // }); 
};