const sgMail = require('@sendgrid/mail')
require('dotenv').config()
sgMail.setApiKey(process.env.SGKEY)

const sendRequestMail = function(to,from,name,bookname,reason){
    sgMail.send({
        to: to,
        from: 'bookbacker456@gmail.com',
        subject: 'UPDATE:SomeOne Requested You for a book',
        text: `The user with following details, ${name}(${from}). Has Requested You for the following Book:${bookname},Reason:${reason}`
    })
}
module.exports = {
    sendRequestMail
}
