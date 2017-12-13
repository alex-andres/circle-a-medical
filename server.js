const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();
var routes = require("./routes/user")
var passport = require("./config/passport");
var session = require('express-session')
var config = require("./config/extra-config");
var path = require('path')



var isAuth = require("./config/middleware/isAuthenticated");
var authCheck = require('./config/middleware/attachAuthenticationStatus');


app.use(express.static("public"));
app.use('/', routes)
app.use(session({ secret: config.sessionKey, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(authCheck);






app.listen(port, function(){
   console.log("Server running on port: " , port);

});

