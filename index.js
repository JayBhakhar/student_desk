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


app.post("/add_student", (req, res) => {
    console.log('post');
    console.log(req.body.name);
    console.log(req.body.faculty);
    console.log(req.body.course);
    console.log(req.body.group);
        // name = req.body.name,
        // faculty = req.body.faculty,
        // course = req.body.course,
        // group = req.body.group,    
});

app.listen(3000, function() {
    console.log("App listening on port 3000!");
});
