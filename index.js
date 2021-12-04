//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();

app.use(express.static("public")); // folder name :- public
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    console.log("working")
    res.send('hello');
});

app.listen(3000, function() {
    console.log("App listening on port 3000!");
});
