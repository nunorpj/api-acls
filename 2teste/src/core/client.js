const Client = require("./../db/models/client")
const acl = require("./../utils/alc/index").acl;

function insertClient(req,res){

    let client = new Client({
        name: req.body.name
    })
    client.save().then(()=>{
        res.send("client created")
    }).catch(err=>{
        res.status(500).send(err)
    })
}

function insertColab(req,res){
    acl.addUser(req.body.userID,req.body.clientID)
        .then(()=>{
            res.send("colab added")
        }).catch(err=>{
            console.log(err);
            res.status(500).send(err)
        })
}

module.exports.insertClient=insertClient;
module.exports.insertColab=insertColab;