const express=require("express");
const dotenv=require("dotenv");
const morgan=require("morgan");
const bodyparser=require("body-parser");
const ejs=require("ejs");
const path=require("path");
const axios=require("axios");
const app=express();
dotenv.config({path:"config.env"});
const connectDB=require("./server/database/connection")
const PORT=process.env.PORT||8080;
// Parse Data using Body-Parser 
app.use(bodyparser.urlencoded({extended:true}));
// Log Request 
app.use(morgan("tiny"));
//connect to Mongoose
connectDB();
// Set view Engine 
app.set("view engine","ejs");
// Load Assets 
app.use(express.static("assets"));
// app.use("/css",express.static(path.resolve(__dirname,"assets/css")));
// app.use("/img",express.static(path.resolve(__dirname,"assets/img")));
// app.use("/js",express.static(path.resolve(__dirname,"assets/js")));

// Load routers 
app.use('/',require('./server/routes/router'));

//Listening Server
app.listen(PORT,(req,res)=>{
    console.log(`Server is listening on http://localhost:${PORT}`);
})