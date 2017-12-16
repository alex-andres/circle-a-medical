var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var User = require("../models/User.js");

passport.use(new LocalStrategy(

  {
    usernameField: "username",
    passwordField : 'password'
  },
  
  function(username, password, done) {

    User.findOne({ 'username' :  username }, function(err, user) {

      if (err)
          return done(err);

      if (!user)
          return done(null, false, flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

      if (!user.validPassword(password))
          return done(null, false, flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

// Exporting our configured passport
module.exports = passport;