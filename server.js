var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
var PORT = process.env.PORT || 8080;
 
var app = express()


 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'))



require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });