const router = module.exports = require('express').Router();
const {checkExistance,checkUser,checkClient} = require("./../middleware/client")
const {insertClient,insertColab} = require("./../core/client")

router.post("/insertclient",checkExistance,insertClient);
router.post("/insertColab", checkUser,checkClient,insertColab)