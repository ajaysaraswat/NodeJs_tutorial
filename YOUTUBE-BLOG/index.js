const express = require("express");
const path = require("path");
const userRoute  = require('./routes/user') ;
const { connectTOMongoDB } = require("./connection.js");


const app = express();
const PORT = 8000;

connectTOMongoDB("mongodb://127.0.0.1:27017/blogify")
.then(()=>{
console.log("mogoDb connected");
});

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.urlencoded({extended : false}));


app.get('/',(req,res)=>{
    return res.render("home");
})
app.use("/user",userRoute);


app.listen(PORT,(req,res)=>{
    console.log(`server started at PORT : ${PORT}`)
})
