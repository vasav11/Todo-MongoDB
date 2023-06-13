const express = require("express");
const bodyparser = require("body-parser");
var app =express();
var items = [];
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todo");
useNewUrlParser:true
useUnifiedTopology:true
const trySchema = new mongoose.Schema({
  name:String
});
const item = mongoose.model("task",trySchema);
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
  name:"Take Some rest"
});
//todo2.save();
//todo3.save();
//todo4.save(); 
async function getItems(){
 const Items = await item.find({});
 return Items;
}
app.get("/",  function(req,res){
 getItems().then(function(foundItems){
res.render("list",{dayej:foundItems});
 });
   //item.find({},function(err,foundItems)  {
 // if (err){
  // console.log(err);
 // }
 // else{
   // res.render("list",{davej: foundItems});
 // }
 
  // });

});
app.post("/",function(req,res){
  const itemName =req.body.ele1;
  const todo4 = new item ({
     name:itemName
  });
  todo4.save()
  res.redirect("/")
});
app.post("/delete",function(req,res){
  const checked = req.body.checkbox1;
  item.findByIdAndRemove(checked,function(err){
    if(!err){
      console.log("deleted");
      res.redirect("/");
    }
  });
})
app.listen("3000",function(){
  console.log("server is running");
});
