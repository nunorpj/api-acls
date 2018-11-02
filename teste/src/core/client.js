const Client = require("./../db/models/client")
const Collaborator = require("./../db/models/collaborator")
const User = require("./../db/models/user")
const Permission = require("./../db/models/permission")

function insertClient(req, res) {

    let client = new Client({
        name: req.body.name
    })
    client.save().then(() => {
        res.send("client created")
    }).catch(err => {
        res.status(500).send(err)
    })
}


function insertColab(req, res) {

    let permission = new Permission();

    permission.save().then(perm => {

        let colab = new Collaborator({
            userID: req.body.userID,
            clientID: req.body.clientID,
            permissionsID: perm._id,
        })
        colab.save().then(cob => {
            res.send(cob)
        }).catch(err => {
            res.status(500).send(err)
        })


    }).catch(err => {


        res.status(500).send(err)
    })

}

module.exports.insertClient = insertClient;
module.exports.insertColab = insertColab;