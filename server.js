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

mongoose.Promise = global.Promise;

// view engine setup
app.set("views", path.join(__dirname, "views"));

//set up handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    helpers: {
      inventory: function(name, options) {
        if (!this._inventory) this._inventory = {};
        this._inventory[name] = options.fn(this);
        return null;
      },
      inventory_search_results: function(name, options) {
        if (!this._inventory_search_results)
          this._inventory_search_results = {};
        this._inventory_search_results[name] = options.fn(this);
        return null;
      },
      logins: function(name, options) {
        if (!this._logins)
          this._logins = {};
        this._logins[name] = options.fn(this);
        return null;
      },
      spreadsheet: function(name, options) {
        if (!this._spreadsheets) this._spreadsheets = {};
        this._spreadsheets[name] = options.fn(this);
        return null;
      },
      wizard: function(name, options) {
        if (!this._wizard) this._wizard = {};
        this._wizard[name] = options.fn(this);
        return null;
      },
      fileIndex: function(value, options) {
        return parseInt(value) + 1;
      }
    }
  })
);

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(session({ secret: config.sessionKey, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(authCheck);

require('./routes')(app);

const configDB = require('./config/database');
mongoose.connect(configDB.url, { useMongoClient: true });

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("Server running on port: ", PORT);
});