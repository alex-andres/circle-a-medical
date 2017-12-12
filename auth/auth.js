var mongoose = require("mongoose");
var Schema = mongoose.Schema,
  bcrypt = require("bcrypt"),
  SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true }
});

UserSchema.pre(mongoose.save, function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
    });
  };

var User = mongoose.model("User", UserSchema);

// create a user a new user
var testUser = new User({
  username: "jmar777",
  password: "Password"
});

// save user to database
testUser.save(function(err) {
  if (err) throw err;
});

// fetch user and test password verification
User.findOne({ username: "jmar777" }, function(err, user) {
  if (err) throw err;
});

// test a matching password
User.comparePassword("Password123", function(err, isMatch) {
  if (err) throw err;
  console.log("Password123:", isMatch); // -&gt; Password123: true
});

// test a failing password
User.comparePassword("123Password", function(err, isMatch) {
  if (err) throw err;
  console.log("123Password:", isMatch); // -&gt; 123Password: false
});
