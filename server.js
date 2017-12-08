const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();
const routes = require('./controllers/back-end-controller.js');


//Use the public folder for static files
//app.use(express.static("public"));
app.use('/', routes);


app.listen(port, function(){
   console.log("Server running on port: " , port);

});

