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


function ckeckColaborator(req,res,next){

    User.findOne({email: req.body.email}).then(user=>{
        if(user!=null){
            next()
        }else{
            res.status(400).send("user doest exists")
            return        }
    }).catch(err=>{
        console.log(err)
        res.status(500).send(err)
    })

}

module.exports.checkExistance=checkExistance;
module.exports.ckeckColaborator=ckeckColaborator;