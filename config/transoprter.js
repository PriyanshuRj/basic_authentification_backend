const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USEREMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

module.exports = transporter;