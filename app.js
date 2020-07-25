//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let mainList = [];
let workList = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("list", {newListItems: mainList,
                      webTitle: "To Do List",
                      page: "/"});
});

app.get("/work", function(req, res){
  res.render("list", {newListItems: workList,
                      webTitle: "Work To Do",
                      page: "/work"});
});

app.post("/", function(req, res){
  if(req.body.list === "/work"){
    if (req.body.newItem != "/")
      workList.push(req.body.newItem);
    res.redirect("/work");
  }else{
    if (req.body.newItem != "/")
      mainList.push(req.body.newItem);
    res.redirect("/");
  }

});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
