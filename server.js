const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const cheerio = require("cheerio");
const axios = require("axios");

var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scraperAssignment";

mongoose.connect(MONGODB_URI);

mongoose.set('useCreateIndex', true);

app.listen(PORT, function(){
    console.log("App Running on port" + PORT + "!");
});
