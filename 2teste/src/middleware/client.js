const User = require("./../db/models/user")
const Client = require("./../db/models/client")


function checkExistance(req,res,next){

    Client.findOne({name: req.body.name}).then(client=>{
        if(client){
            res.status(400).send("client already exists")
            return
        }
    }).catch(err=>{
        res.status(500).send(err)
    })

    next();
}


function checkUser(req,res,next){

    User.findOne({email: req.body.email}).then(user=>{
        if(user!=null){
            req.body.userID= user._id;
            next()
        }else{
            res.status(400).send("user doest exists")
            return        }
    }).catch(err=>{
        console.log(err)
        res.status(500).send(err)
    })

}


function checkClient(req,res,next){

    if(!req.body.clientName){
        req.body.clientName= req.params.clientName
    }

    Client.findOne({name: req.body.clientName}).then(client=>{
        if(client!=null){
            req.body.clientID= client._id;
            next()
        }else{
            res.status(400).send("client doest exists")
            return        }
    }).catch(err=>{
        console.log(err)
        res.status(500).send(err)
    })

}
module.exports.checkClient=checkClient;
module.exports.checkExistance=checkExistance;
module.exports.checkUser=checkUser;