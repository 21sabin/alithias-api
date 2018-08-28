const userService=require('../service/userService');
const router=require('express').Router();

router.get('/names',(req,res)=>{
  userService.proceduresName().then(data=>console.log(data,"names"))
 });

router.post('/',(req,res)=>{
   userService.procedureList(req.body).then(recordset=>{
       res.json({
           body:recordset?recordset.recordsets[0]:[]
       })
   }).catch(err=>{
       
   })
});


module.exports=router;

