const mongoose=require("mongoose");
 var schema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    gender:String,
    status:String
 })
 const crudDb=mongoose.model("crudDB",schema);
 module.exports=crudDb;