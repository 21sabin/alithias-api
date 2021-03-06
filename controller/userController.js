const express=require('express');
const router=require("express").Router();
let UserService=require("../service/userService");
const userService=new UserService();

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