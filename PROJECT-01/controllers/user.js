const User = require("../models/user")
async function handlegetAllUsers(req,res){
    const alldbUsers = await User.find({});
    return res.json(alldbUsers);
}

async function handlegetUserbyId(req,res){
    const user = await User.findById(req.params.id);
       return res.json(user);
}

async function handleupdateuserbyId(req,res){
    await User.findByIdAndUpdate(req.params.id,{firstName: "anika"});
    return res.json({ status : "success"});

}

async function handleDeletebyId(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status : "success"});
}

async function handleCreatNewUser(req,res){
    const body = req.body;
    if(!body||
        !body.first_name||
        !body.last_name||
        !body.email||
        !body.gender||
        !body.job_tittle

    ){
            return res.status(400).json({msg : "all fields are required"});
    }
    const result=await User.create({
        firstName : body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender,
        jobTittle:body.job_tittle,

    });
    console.log("result",result);
    return res.status(201).json({msg : "success",id :result._id});
}
module.exports = {
    handlegetAllUsers,
    handlegetUserbyId,
    handleupdateuserbyId,
    handleDeletebyId,
    handleCreatNewUser,
    
}