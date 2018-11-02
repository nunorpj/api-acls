const Client = require("./../db/models/client")
const Equipment = require("./../db/models/equipment")
const Permission = require("./../db/models/permission")
const Collaborator = require("./../db/models/collaborator")

function veryEquipmentData(req, res, next) {

    if (req.method == "POST") {
        if (!req.body.equipmentName) {
            res.status(400).send("equipmentName is missing")
            return
        }
        if (!req.body.clientName) {
            res.status(400).send("clientName is missing")
            return
        }
    }
    if (req.method == "DELETE") {
        if (!req.body.equipmentName) {
            res.status(400).send("equipmentName is missing")
            return
        }
    }

    if (req.method == "PUT") {
        if (!req.body.equipmentName) {
            res.status(400).send("equipmentName is missing")
            return
        }
        if (!req.body.newEquipmentName) {
            res.status(400).send("newEquipmentName is missing")
            return
        }
    }

    if (req.method == "GET") {
        if (!req.params.clientName) {
            res.status(400).send("clientName is missing")
            return
        }
    }


    next()
}


function checkEquipment(req, res, next) {
    Equipment.findOne({
        name: req.body.equipmentName
    }).then(equiq => {
        if (equiq != null) {
            req.body.equiqOwnerId = equiq.owner
            next()
        } else {
            res.status(400).send("Equipment doest exists")
            return
        }
    }).catch(err => {
        console.log(err)
        res.status(500).send(err)
    })

}

function checkPermissions(req, res, next) {
    Permission.findById(req.body.permissionID).then(perm => {
        if (req.method == "GET" && perm.permissions[0] == "r")
            next();
        if ((req.method == "POST" || req.method == "PUT") && perm.permissions[1] == "w")
            next()
        if (req.method == "DELETE" && perm.permissions[2] == "d")
            next();
    }).catch(err=>{
        res.status(500).send(err)
    })





}

function checkifItsColb(req, res, next) {

    Collaborator.findOne({
        userID: req.authData.playload,
        clientID: req.body.clientID
    }).then(colab => {
        if (colab != null) {
            req.body.permissionID = colab.permissionsID
            next()
        } else {
            res.status(400).send("User isnt a collaborator")
            return
        }
    }).catch(err => {
        console.log(err)
        res.status(500).send(err)
    })

}



module.exports.checkifItsColb = checkifItsColb;
module.exports.checkPermissions = checkPermissions;
module.exports.checkEquipment = checkEquipment;
module.exports.veryEquipmentData = veryEquipmentData;