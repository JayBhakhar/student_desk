//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public")); // folder name :- public
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("dashboard");
});

app.get("/add_student", (req, res) => {
    res.render("add_student");
});

app.listen(3000, function() {
    console.log("App listening on port 3000!");
});
