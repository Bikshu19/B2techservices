const nodemailer = require('nodemailer');
const dotenv=require('dotenv')
dotenv.config()

const transporter = nodemailer.createTransport({
  service: 'gmail',  // or your email provider
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});

const sendEmail = async (to, subject, text) => {
  await transporter.sendMail({
    from: process.env.user,
    to,
    subject,
    text,
  });
};

module.exports = { sendEmail };
