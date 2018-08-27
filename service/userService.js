const sql=require('mssql');
const dbconfig=require('./../config/db.config');
const fetch=require('node-fetch');

var userService=(()=>{
    const request=new sql.Request();
   

    async function userActivities(){
        return new Promise((resolve,reject)=>{
            const pool=new sql.ConnectionPool(dbconfig).connect((error)=>{
                if(error){
                    reject(error); 
                }else{
                    pool.request().query("select ID,CompanyID,ProcedureID,UserID from UserActivity",(err,result)=>{
                        if(err){
                            reject(err);
                        }else{
                            console.log(result,"result");
                            resolve(result);
                        }
                    })
                }
            })
        })
    }
    
    async function procedureList(value){
        console.log(value,"service procedurelist")
        return new Promise((resolve,reject)=>{
            const pool=new sql.ConnectionPool(dbconfig).connect((error)=>{
                if(error){
                    reject(error); 
                }else{
                    pool.request().
                    input('StartDate',sql.DateTime,new Date(value.StartDate))
                    .input('EndDate',sql.DateTime,new Date(value.EndDate))
                    .input('AlithiasCompanyID',sql.Int,value.AlithiasCompanyID)
                   .execute('SP_UserActivityLog_Get',(err,result)=>{
                        if(err){
                            console.log("stored procedure errror",err)
                            reject(err);
                        }else{
                            resolve(result);
                        }
                    })
                }
            })
        })
    }

    // async function procedures(url){
    //     console.log('url',url)
    //     return fetch(url,{
    //         method: 'GET',
    //         headers:{
    //             "DCUBE-API-KEY":"25C3661923A529B2D7AD9D88D557FFA5"
    //         }
    //     });
    // }
    

    return {
        userActivities:userActivities,
        procedureList:procedureList
       
    }

})();

module.exports=userService;