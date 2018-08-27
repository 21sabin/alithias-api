const express=require('express');
const router=require("express").Router();
let userService=require("../service/userService");

router.get("/",(req,res)=>{
    userService.userActivities().then(recordset=>{
        res.json({
            data:recordset?recordset.recordsets[0]:[]
        })
    }).catch(err=>{
        return res.json({
            error:err
        })
    })
});

module.exports=router;