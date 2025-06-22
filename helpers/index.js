import nodemailer from "nodemailer"

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  service:"gmail",
  auth: {
    user: "muhammadasifansari101@gmail.com",
    pass: "ujbogfjdwwhfpjyi",
  },
});

export default transporter;