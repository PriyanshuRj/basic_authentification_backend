const express = require("express");
const usercontroller = require("../controllers/usercontroller");
const router = express.Router();
router.use('/v1', require('./v1/index'))
router.get('/',function(req,res){
    res.status(200).json({message:"Listining to you"})
})

module.exports = router;