const router = module.exports = require('express').Router();
const {verifyEmail,verifyRegistryData,verifyLogInData} = require("../middleware/auth")
const {login,registry} = require("../core/auth")


router.post("/registry",verifyRegistryData,verifyEmail,registry );
router.post("/login", verifyLogInData,login)
