//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public")); // folder name :- public
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect("mongodb+srv://JayBhakhar:jay456789@student-desk.ff0hu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true});

const studentSchema = {
    name: String,
    faculty: String,
    course: String,
    group: String
  };

const Student = mongoose.model("Student", studentSchema);

app.get("/", (req, res) => {
    Student.find({}, function(err, students){
    res.render("dashboard", {
        students: students
    });
    });
});

app.get("/add_student", (req, res) => {
    res.render("add_student");
});


app.post("/add_student", (req, res) => {
    const student = new Student({
      name: req.body.name,
      faculty: req.body.faculty,
      course: req.body.course,
      group: req.body.group
    });  
    
    student.save(function(err){
    if (!err){
        res.redirect("/");
      }
    });       
});

app.get("/add_student/delete/:id", function(req, res){
  Student.findByIdAndRemove(req.params.id, function(err){
      if (!err) {
        console.log("Successfully deleted checked item.");
        res.redirect("/");
      }
    })    
});
      

app.listen(process.env.PORT || 3000, function() {
  console.log('Express is working on port 3000');
});
