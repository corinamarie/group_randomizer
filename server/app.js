var express = require("express");
var path = require("path");
var index = require("./routes/index");

var app = express();

app.set("port", (process.env.PORT || 5000));

app.use("/", index); //anytime it gets any kind of request, just throw it to the index.js file

app.listen(app.get("port"), function(){
   console.log("Listening on port: " + app.get("port"));
});