const express = require("express");
const usercontroller = require("../../controllers/usercontroller");
const router = express.Router();

router.post('/signup',usercontroller.signup);
router.post('/login',usercontroller.login);
router.post('/otpverify',usercontroller.otpverify);
router.post("/requestotp",usercontroller.requestotp);
router.post("/requestmobileotp",usercontroller.requestMobileOTP);

module.exports = router;
