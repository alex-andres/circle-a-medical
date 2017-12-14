const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const express = require('express');

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



const connection = require('./db/mongoose');
const controller = require('./controllers/back_end_controller');

<<<<<<< HEAD
=======
const PORT = process.env.PORT || 3000;
>>>>>>> 6cf81ef9e048f0b98f3169b4ad0ca6157ebac2d6

// FIXME: implemet handlebars
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');


//Use the public folder for static files
app.use(express.static("public", { index: 'spreadsheets.html' }));

// use bodyParser as middleware
app.use(bodyParser.json());

app.use('/', controller);

app.listen(PORT, function() {
    console.log("Server running on port: ", PORT);
});