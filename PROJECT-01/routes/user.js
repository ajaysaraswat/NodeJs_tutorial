const express = require("express");
const router = express.Router();
const {handlegetAllUsers, handlegetUserbyId,handleupdateuserbyId,handleDeletebyId,handleCreatNewUser} = require("../controllers/user")

router
.route("/")
.get(handlegetAllUsers)
.post(handleCreatNewUser);
   


// app.get('/:id',(req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user)=> user.id === id);
//     return res.json(user);
// })

//to do many goal with one request
router
.route("/:id")
.get( handlegetUserbyId)
.patch(handleupdateuserbyId)
.delete(handleDeletebyId);
   




// router
// router.get('/',async(req,res)=>{
//      const alldbUsers = await User.find({}) // {}--->means all users
//     const html = `
//     <ul>
//     ${alldbUsers.map((user)=>`<li>${user.firstName}</li>`)}
//     </ul>
//     `
//     return res.send(html);

// })
//Rest API
router.get("/",(req,res)=>{
    res.setHeader("Myname","piyush garg"); //custom header
    return res.json(users);
});

module.exports = router;