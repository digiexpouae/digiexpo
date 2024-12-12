
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

    const { name, email, message } = req.body;

    console.log(req.body)

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });



    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Contact Form Submission",
      text: message,
    });

    return res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error sending email." });
  }
}
