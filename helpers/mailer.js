const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth:{
    user:"fixtermailer@gmail.com",
    pass:"Superman77"
  }
})

function welcomeMail(email, name){
  transport.sendMail({
    
  })


}