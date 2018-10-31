const Client = require("./../db/models/client")

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

    res.send("aqui inseres colaboradores")

}

module.exports.insertClient=insertClient;
module.exports.insertColab=insertColab;