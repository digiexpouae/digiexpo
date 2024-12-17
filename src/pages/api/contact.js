import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, inquiry, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, email, and message are required." });
  }

  try {
    // Email Configuration
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false, // Use TLS
      auth: {
        user: process.env.INTERNAL_EMAIL_USERNAME,
        pass: process.env.INTERNAL_EMAIL_PASSWORD
      }
    });

    // Send email to business email
    await transporter.sendMail({
      from: `"${process.env.SITE_NAME} Contact Form" <${process.env.INTERNAL_EMAIL_USERNAME}>`,
      to: process.env.BUSINESS_EMAIL,
      subject: `New Contact Form Submission: ${inquiry}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Inquiry Type:</strong> ${inquiry}</p>
        <p><strong>Message:</strong></p>
        <blockquote>${message}</blockquote>
        <p><em>Received on: ${new Date().toLocaleString()}</em></p>
      `,
      replyTo: email
    });

    return res.status(200).json({ 
      success: true, 
      message: "Contact submission sent successfully." 
    });

  } catch (error) {
    console.error('Contact Form Submission Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: "Error processing contact submission.",
      error: error.message 
    });
  }
}
