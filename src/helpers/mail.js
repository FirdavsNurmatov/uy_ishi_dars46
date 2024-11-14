import nodemailer from "nodemailer";
import { config } from "dotenv";

config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "firdavsnurmatov450@gmail.com",
    pass: process.env.APP_PASSWORD,
  },
});

export const sendMail = (to, subject, text) => {
  transporter.sendMail(
    {
      from: "firdavsnurmatov450@gmail.com",
      to,
      subject,
      text,
    },
    function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    }
  );
};
