const router = require('express').Router();
const MailService = require('../service/mailService');
const mailService = new MailService();
const utility = require('../utility/utility');
const HcmtService=require('./../service/hcmtService');
const hcmtService=new HcmtService();

router.post('/', async (request, response) => {
    hcmtService.createHcmt( request.body ).then(hcmt=>{
        mailService.sendMail( request.body).then(email=>{
            response.status(202).json({message:"Your Email has been send successfully."})
        }).catch(error=>{
            utility.handleError( error , response )
        })
    }).catch(error=>{
        utility.handleError( error , response )
    })
});


module.exports = router;