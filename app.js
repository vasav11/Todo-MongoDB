const bodyParser = require("body-parser");
const express = require("express");
var app = express();
var items = [];
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/todolist");
useNewUrlParser:true
useUnifiedTopology:true
const trySchema = new mongoose.Schema({
    name:String
});
const item = mongoose.model("task1",trySchema);
const todo = new item({
   
    name:"create some videos"
});
const todo2 = new item({
    name:"Learn DSA"
});
const todo3 = new item({
    name:"Learn React"
});
const todo4 = new item({
 name:"Take some rest"
});
//todo.save();/
//todo2.save();/
//todo3.save();
//todo4.save();
 app.get("/",function(req,res){
 item.find({},function(err,foundItems){
    if(err){
        console.log(err);
    }
    else{
        res.render("list",{newListItems:foundItems})
    }
});
});
app.post("/delete",function(req,res){
    const checked = req.body.checkbox1;
    item.findByIdAndRemove(checked,function(err){
        if(!err){
            console.log("deleted");
            res.redirect("/");
        }
    });
});
app.post("/",function(req,res){
    const itemName = req.body.newItem;
    const todo4 = new item({
      name:itemName
    });
    todo4.save();
    res.redirect("/");
});
app.listen("3000",function(){
    console.log("server is running")
});