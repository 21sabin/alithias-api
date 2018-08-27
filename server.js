const express=require("express");
const dbconfig=require("./config/db.config");
const bodyParser=require('body-parser');
var app=express();

// const { connection ,request } =require('./connection/db.connection');
app.use(bodyParser.json());

const routes=require('./routes/appRoutes');
app.use("/api",routes)

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})