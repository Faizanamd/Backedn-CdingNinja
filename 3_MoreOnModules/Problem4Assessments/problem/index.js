
import http from "http";
import fs from "fs";
import EventEmitter from "events";
import nodemailer from "nodemailer";

class CustomEvent extends EventEmitter {
  mailSent(email) {
    this.emit("mailSent", email);
  }
}

const customEvent = new CustomEvent();

const server = http.createServer((req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codingninjas2k16@gmail.com",
      pass: "slwvvlczduktvhdj",
    },
  });

  if (req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const { name, email, message } = JSON.parse(data);

      // Store user query in "query.txt"
      const userQuery = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;
      fs.appendFile("queries.txt", userQuery, (err) => {
        if (err) {
          console.error("Error storing user query:", err);
        }
      });

      // Use Nodemailer to send confirmation email
      const mailOptions = {
        from: "codingninjas2k16@gmail.com",
        to: email,
        subject: "Query Confirmation",
        text: "Your query has been received and will be addressed shortly.",
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending confirmation email:", error);
        } else {
          console.log("Confirmation email sent:", info.response);

          // Emit "mailSent" event
          customEvent.mailSent(email);
        }
      });

      res.end("Query received");
    });
  } else {
    res.end("Welcome to Coding Ninjas!");
  }
});

const Solution = () => {
  customEvent.addListener("mailSent", (email) => {
    console.log(`custom event "mailSent" emitted`);
    console.log(
      `confirming that the email has been sent successfully to ${email}`
    );
  });
};

export default server;
export { server, CustomEvent, Solution };
