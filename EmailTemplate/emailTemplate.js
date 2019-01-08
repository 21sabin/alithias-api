const emailTemplate =  ( body )=>{
    let name;
    if( body.MiddleName == '' ){
        name = body.FirstName + ' ' + body.LastName;
    }else{
        name = body.FirstName + ' ' + body.MiddleName + ' ' + body.LastName;
    }
const mailText = `
There is a new request from ${name} for additional
 information about a procedure. Please <a href='https://carenavigator-qa.alithias.com/#/request/procduredeadend'>click here </a> to view the request.
`
 return mailText;
 
}

module.exports = { emailTemplate }