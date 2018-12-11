const { pool, sql } = require('./../connection/db.connection');
const mailHelper = require('../utility/mailHelper');
const template = require('../EmailTemplate/emailTemplate');

class MailService {

    sendMail(body) {

        const mailOptions = {
            to: 'support@alithias.com',
            from: 'support@alithias.com',
            subject: 'Alithias',
            html:template.emailTemplate( body )
           
        }
        return new Promise((resolve, reject) => {
            let transport = mailHelper.getTransport();
            transport.sendMail(mailOptions, (error) => {
                if (error) {
                    reject({ messasge: "Sending Email Failed." })
                }
                resolve({ message: "Your Email has been sucessfully send." })
            })
        })
    }
}

module.exports = MailService;