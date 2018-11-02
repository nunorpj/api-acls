const User = require("./../db/models/user")
const Client = require("./../db/models/client")
const Collaborator = require("./../db/models/collaborator")

function checkExistance(req, res, next) {

    Client.findOne({
        name: req.body.name
    }).then(client => {
        if (client) {
            res.status(400).send("client already exists")
            return
        }
    }).catch(err => {
        res.status(500).send(err)
    })

    next();
}


function checkEmail(req, res, next) {

    User.findOne({
        email: req.body.email
    }).then(user => {
        if (user != null) {
            req.body.userID = user._id;
            next()
        } else {
            res.status(400).send("user doest exists")
            return
        }
    }).catch(err => {
        console.log(err)
        res.status(500).send(err)
    })

}

function checkClient(req, res, next) {
    let clientname
    if (req.body.clientName)
        clientname = req.body.clientName;
    else
        clientname = req.params.clientName

    Client.findOne({
        name: clientname
    }).then(client => {
        if (client != null) {
            req.body.clientID = client._id
            next()
        } else {
            res.status(400).send("client doest exists")
            return
        }
    }).catch(err => {
        console.log(err)
        res.status(500).send(err)
    })

}

function chechIfAlreadyIsColab(req, res, next) {
    Collaborator.findOne({
        userID: req.body.userID,
        clientID: req.body.clientID
    }).then(colab => {
        if (colab == null) {
            next()
        } else {
            res.status(400).send("the user is already an collaborator")
            return
        }
    }).catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
}


module.exports.chechIfAlreadyIsColab = chechIfAlreadyIsColab;
module.exports.checkClient = checkClient;
module.exports.checkExistance = checkExistance;
module.exports.checkEmail = checkEmail;