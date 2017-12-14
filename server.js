const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const express = require('express');

const app = express();
const passport = require("./config/passport");
const session = require('express-session');
const config = require("./config/extra-config");
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const flash = require('connect-flash');



const isAuth = require("./config/middleware/isAuthenticated");
const authCheck = require('./config/middleware/attachAuthenticationStatus');



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static("public", { index: 'login.html'}));
app.use(session({ secret: config.sessionKey, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(authCheck);

require('./routes')(app);

const configDB = require('./config/database');
mongoose.connect(configDB.url);

const PORT = process.env.PORT || 3000;

// FIXME: implemet handlebars
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');


app.listen(PORT, function() {
    console.log("Server running on port: ", PORT);
});