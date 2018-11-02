const router = module.exports = require('express').Router();
const {createEquipment,editEquipment,deleteEquipment,serveEquipments} = require("./../core/equipment")
const {veryEquipmentData,checkEquipment,checkPermissions,checkifItsColb} = require("./../middleware/equipment")
const {verifyToken}=require("./../middleware/verify")
const {checkClient} = require("./../middleware/client")
//req.body.clientName | req.body.equiment...

router.post("/equipment",verifyToken,veryEquipmentData,checkClient,checkifItsColb,checkPermissions,createEquipment);
router.put("/equipment" ,verifyToken,veryEquipmentData,checkEquipment,checkifItsColb,checkPermissions,editEquipment);
router.delete("/equipment", verifyToken,veryEquipmentData,checkEquipment,checkifItsColb,checkPermissions,deleteEquipment)
router.get("/equipment/:clientName",verifyToken,veryEquipmentData,checkClient,checkifItsColb,checkPermissions,serveEquipments)