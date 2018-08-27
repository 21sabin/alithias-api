const userService=require('../service/userService');
const router=require('express').Router();


router.post('/',(req,res)=>{
   userService.procedureList(req.body).then(recordset=>{
       res.json({
           body:recordset?recordset.recordsets[0]:[]
       })
   }).catch(err=>{
       
   })
});

module.exports=router;

