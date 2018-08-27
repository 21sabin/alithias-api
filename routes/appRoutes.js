const router=require("express").Router();
const userController=require('../controller/userController');
const procedureController=require('../controller/procedureController');

router.use("/userActivities",userController);
router.use("/procedures",procedureController);

module.exports=router;