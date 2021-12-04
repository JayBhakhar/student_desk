//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();

app.use(express.static("public")); // folder name :- public
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/dashboard.html');
});

app.listen(3000, function() {
    console.log("App listening on port 3000!");
});
