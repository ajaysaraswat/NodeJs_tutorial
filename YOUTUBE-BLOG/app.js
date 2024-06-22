require("dotenv").config();

const express = require("express");
const path = require("path");
const userRoute  = require('./routes/user.js') ;
const blogRoute = require('./routes/blog.js')
const { connectTOMongoDB } = require("./connection.js");
const cookieParser = require("cookie-parser");
const { checkForAuthenticationCookie } = require("./middlewares/authentication.js");
const Blog =  require('./models/blog.js');



const app = express();
const PORT =process.env.PORT || 8000;

connectTOMongoDB(process.env.MONGO_URL)
.then(()=>{
console.log("mogoDb connected");
});

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public"))); // to load image on cards we make upload as static

app.get('/',async (req,res)=>{
    const allBlogs = await Blog.find({});

    
     res.render("home",{
        user : req.user,
        blogs : allBlogs,
    });

});
app.use("/user",userRoute);
app.use('/blog',blogRoute);


app.listen(PORT,(req,res)=>{
    console.log(`server started at PORT : ${PORT}`)
})
