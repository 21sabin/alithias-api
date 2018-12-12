const router=require('express').Router();
const HcmtService=require('./../service/hcmtService');
const utility = require('../utility/utility');

const hcmtService=new HcmtService();

router.post('/',(request,response)=>{
    hcmtService.createHcmt(request.body).then(result=>{
        utility.handleSuccess( result.recordset , response);
    }).catch(error=>{
       utility.handleError( error, response );
    })
})

router.get('/',( request,response)=>{
    hcmtService.getHcmtData().then(hcmt=>{
        utility.handleSuccess( hcmt.recordset , response);
    }).catch(error=>{
        utility.handleError( error, response );
     })
})

module.exports=router;