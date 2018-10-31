const User = require("./../db/models/user")
const Client = require("./../db/models/client")
const Equipment = require("./../db/models/equipment")


function serveEquipments(req, res) {
    Client.findOne({
        name: req.params.clientName
    }).then(client => {

        Equipment.find({
                owner: client._id
            })
            .then(equips => {
                res.send(equips)
            }).catch(err => {
                res.status(500).send(err)
            })

    }).catch(err => {
        res.status(500).send(err)
    })

}

function editEquipment(req, res) {

    Equipment.findOne({
            name: req.body.equipmentName
        })
        .then(user => {
            user.name = req.body.newEquipmentName
            user.save().then(res.send("edited Successefully")).catch(err => {
                res.status(500).send(err)
            })

        }).catch(err => {
            res.status(500).send(err)
        })
}

function deleteEquipment(req, res) {

    Equipment.deleteOne({
            name: req.body.equipmentName
        })
        .then(
            res.send("delete Successefully")
        ).catch(err => {
            res.status(500).send(err)
        })

}

function createEquipment(req, res) {
    Client.findOne({
        name: req.body.clientName
    }).then(client => {

        let newEquip = new Equipment({
            name: req.body.equipmentName,
            owner: client._id
        })

        newEquip.save()
            .then(res.send("equipment created"))
            .catch(err => {
                res.status(500).send(err)
            })
    }).catch(err => {
        res.status(500).send(err)
    })


}
module.exports.serveEquipments = serveEquipments;
module.exports.editEquipment = editEquipment;
module.exports.deleteEquipment = deleteEquipment;
module.exports.createEquipment = createEquipment;