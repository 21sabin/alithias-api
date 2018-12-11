const router=require("express").Router();
const userController=require('../controller/userController');
const procedureController=require('../controller/procedureController');
const hcmtController=require('../controller/hcmtController');
const mailController = require('../controller/mailController');

router.use("/userActivities",userController);
router.use("/procedures",procedureController);
router.use("/hcmt",hcmtController);
router.use('/mail',mailController);

module.exports=router;