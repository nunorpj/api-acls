const router = module.exports = require('express').Router();
const {createEquipment,editEquipment,deleteEquipment,serveEquipments} = require("./../core/equipment")
const {veryEquipmentData} = require("./../middleware/equipment")
const {verifyToken}=require("./../middleware/verify")

//req.body.clientName | req.body.equiment...

router.post("/equipment",verifyToken,veryEquipmentData,createEquipment);
router.put("/equipment" ,verifyToken,veryEquipmentData, editEquipment);
router.delete("/equipment", verifyToken,veryEquipmentData,deleteEquipment)
router.get("/equipment/:clientName",verifyToken,veryEquipmentData, serveEquipments)