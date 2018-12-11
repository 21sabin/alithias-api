const dbconfig=require("../config/db.config");
const sql=require('mssql');
const request=new sql.Request();

const pool=new sql.ConnectionPool( dbconfig )
.connect()
.then(pool=>{
    console.log("connected to MSSQL");
    return pool;
})
module.exports={sql,pool}
