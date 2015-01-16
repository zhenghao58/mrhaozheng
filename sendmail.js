var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var wellknown = require('nodemailer-wellknown');

var config = wellknown('Gmail');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    auth: {
        user: 'hoogle58@gmail.com',
        pass: '18627116033'
    }
}));

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols


module.exports = function(name, email, message){
  var mailOptions = {
    from: {
    name: name,
    address: email
},// sender address
    to: 'hz837@nyu.edu', // list of receivers
    subject: 'Message from ' + name, // Subject line
    text: message+"\n"+"\n"+email// plaintext body
  };
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
  });
};


// send mail with defined transport object

