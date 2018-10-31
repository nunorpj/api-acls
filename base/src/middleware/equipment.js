

function veryEquipmentData(req,res,next){

    if(req.method=="POST"){
        if(!req.body.equipmentName){
            res.status(400).send("equipmentName is missing")
            return
        }
        if(!req.body.clientName){
            res.status(400).send("clientName is missing")
            return
        }
    }
    if(req.method=="DELETE"){
        if(!req.body.equipmentName){
            res.status(400).send("equipmentName is missing")
            return
        }
    }

    if(req.method=="PUT"){
        if(!req.body.equipmentName){
            res.status(400).send("equipmentName is missing")
            return
        }
        if(!req.body.newEquipmentName){
            res.status(400).send("newEquipmentName is missing")
            return
        }
    }

    if(req.method=="GET"){
        if(!req.params.clientName){
            res.status(400).send("clientName is missing")
            return
        }
    }


    next()
}

module.exports.veryEquipmentData = veryEquipmentData;