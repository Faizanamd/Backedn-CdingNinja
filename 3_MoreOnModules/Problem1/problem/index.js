// Please don't change the pre-written code


// Import the necessary modules here
import readline from  'readline';
import nodemailer from  'nodemailer';
// const nodemailer = require('nodemailer');

const Solution = () => {
  // Write your code here
  async function sendMail(mail){
    const transporter = nodemailer.createTransport({
      service : 'gmail',
      auth:{
        user:'codingninjas2k16@gmail.com',
        pass: 'slwvvlczduktvhdj',
      },
    });
    const mailOptions = {
      from: 'codingninjas2k16@gmail.com',
      to: `${mail}`,
      subject:'Coding Ninjas',
      text: 'The world has enough coders; be a coding ninja!',
    };
    try{
      const res = await transporter.sendMail(mailOptions);
      console.log("Success: Email send to "+mail);
    }catch(err){
      console.log("Fails: Email sent fails to "+mail);
    }
  }
  
  const interfaceObj = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
  });
  interfaceObj.question("please enter your mail " ,(mail)=>{
    sendMail(mail);
  });

};

export default Solution;
