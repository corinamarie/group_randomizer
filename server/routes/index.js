var express = require('express');
var router = express.Router(); //this pulls in the router functionality
var path = require('path');
var names = require("../public/data/names.json");

router.get("/data", function(req, res){
     res.json(names);
});

router.get("/*", function(req, res){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;