const dbconfig=require("../config/db.config");
const sql=require('mssql');
const request=new sql.Request();

const pool1=new sql.ConnectionPool( dbconfig.db1 )
.connect()
.then(pool=>{
    console.log("connected to MSSQL");
    return pool;
})

const pool2=new sql.ConnectionPool( dbconfig.db2 )
.connect()
.then(pool=>{
    console.log("connected to MSSQL");
    return pool;
})
module.exports={sql,pool1,pool2}
