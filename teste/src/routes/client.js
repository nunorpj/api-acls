const router = module.exports = require('express').Router();
const {checkExistance,checkEmail,checkClient,chechIfAlreadyIsColab} = require("./../middleware/client")
const {insertClient,insertColab} = require("./../core/client")

router.post("/insertclient",checkExistance,insertClient);



//email, clientName
router.post("/insertColab", checkEmail,checkClient,chechIfAlreadyIsColab,insertColab)


