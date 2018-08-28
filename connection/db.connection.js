const dbconfig=require("../config/db.config");
const sql=require('mssql');
const request=new sql.Request();

const connection=sql.connect(dbconfig,(err)=>{
    if(err){console.log("unable to connect to Alitias_HCMT database",err)}
    else {console.log("connection established")}
});

module.exports={connection,request}