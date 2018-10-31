const User = require("../db/models/user")

function verifyRegistryData (req,res,next){
    if(!req.body.email){
        res.status(400).send("email is missing")
        return
    }

    if(!req.body.name){
        res.status(400).send("name is missing")
        return
    }

    if(!req.body.password){
        res.status(400).send("password is missing")
        return
    }

    if(req.body.password.length<6){
        res.status(400).send("password is too short")
        return
    }
    console.log("aqui")

    next();

}


function verifyEmail(req,res,next){
    User.findOne({email:req.body.email}).then(user=>{
        if(user){
            res.status(400).send("email already in use")
            return
        }
           
    }).then(err=>{
        next();
    })
}

function verifyLogInData (req,res,next){
    if(!req.body.email){
        res.status(400).send("email is missing")
        return
    }

    if(!req.body.password){
        res.status(400).send("password is missing")
        return
    }
    next();
}






module.exports.verifyEmail=verifyEmail;
module.exports.verifyRegistryData=verifyRegistryData;
module.exports.verifyLogInData=verifyLogInData;
