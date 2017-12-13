const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const express = require('express');

const app = express();

const connection = require('./db/mongoose');
const controller = require('./controllers/back-end-controller');

const PORT = process.env.PORT || 3000;

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