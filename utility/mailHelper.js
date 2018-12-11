const nodemailer = require( 'nodemailer' );
const mailConfig = require('../config/mailConfig')

const getTransport = () =>{
    return nodemailer.createTransport({
        service : 'Gmail',
        auth : mailConfig.auth
    })
}


module.exports = { getTransport };