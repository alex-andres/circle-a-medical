const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();

//Use the public folder for static files
app.use(express.static("public"));

app.listen(port, function(){
   console.log("Server running on port: " , port);

});
