const nodemailer = require('nodemailer');

async function sendMail() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'codingninjas2k16@gmail.com',
      pass: 'slwvvlczduktvhdj',
    },
  });

  const mailOptions = {
    from: 'codingninjas2k16@gmail.com',
    to: 'fahmmmm338@gm ail.com',
    subject: 'Welcome to Node.js',
    text: 'This is a Node.js email created using Nodemailer',
  };

  try {
      const res = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
  } catch (err) {
    console.log('Email sending failed with error: ' + err);
  }
}

sendMail();
