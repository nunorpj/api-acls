const router = module.exports = require('express').Router();
const {checkExistance,ckeckColaborator} = require("./../middleware/client")
const {insertClient,insertColab} = require("./../core/client")

router.post("/insertclient",checkExistance,insertClient);
router.post("/insertColab", ckeckColaborator,insertColab)