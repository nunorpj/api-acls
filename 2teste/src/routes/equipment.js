const router = module.exports = require('express').Router();
const {createEquipment,editEquipment,deleteEquipment,serveEquipments} = require("./../core/equipment")
const {veryEquipmentData,checkEquipment} = require("./../middleware/equipment")
const {verifyToken}=require("./../middleware/verify")
const {checkClient} = require("./../middleware/client")
const acl = require("./../utils/alc/index").acl


//req.body.clientName | req.body.equiment...
router.post("/equipment",verifyToken,veryEquipmentData,checkClient,acl.checkAccess,createEquipment);
router.put("/equipment" ,verifyToken,veryEquipmentData,checkEquipment,acl.checkAccess, editEquipment);
router.delete("/equipment", verifyToken,veryEquipmentData,checkEquipment,acl.checkAccess,deleteEquipment)
router.get("/equipment/:clientName",verifyToken,veryEquipmentData,checkClient, serveEquipments)