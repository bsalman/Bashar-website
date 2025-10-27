const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE,
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

const sendEmail = (name, email, title, text, callback) => {
  const mailOption = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_RECEIVER,
    subject: "New Contact Message",
    text: `${email}\n${name}\n${title}\n${text}`,
    html: `<html>
            <head>
            <style>
                body { font-family: Arial, sans-serif; }
                h2 { color: #4CAF50; }
                h3 { color: #555555; }
                p { font-size: 16px; color: #333333; }
            </style>
            </head>
            <body>
            <h2>${title}</h2>
            <h2>new E-mail from :${email}</h2>
            <h3>${name}</h3>
            <p>${text}</p>
            </body>
          </html>`
  };

  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      callback(false);
    } else {
      callback(true);
    }
  });
};
module.exports = { sendEmail };
