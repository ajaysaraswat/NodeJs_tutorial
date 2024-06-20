const express = require("express");
const fs = require("fs");
// const users = require("./MOCK_DATA (1).json"); // now we take from mongodb database 

const { type } = require("os");
const { stringify } = require("querystring");

const userRouter = require("./routes/user");
const { connectMongoDb } = require("./connection");
const { logReqRes } = require("./middlewares");

const app = express();
const PORT=8000;

//connect the mongodb
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-2").then(()=>{
    console.log("mongodb connected");
})



//middleware - plugin
app.use(express.urlencoded({extended: false}));
 
app.use(logReqRes("log.txt"));


app.use("/api/users",userRouter);

app.listen(PORT,(req,res)=>{
    console.log("server started");
})