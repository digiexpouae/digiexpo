import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, inquiry, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, email, and message are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.INTERNAL_EMAIL_USERNAME,
        pass: process.env.Tech_DigiExpo,
      },
    });

    // Format date/time in Dubai timezone
    const submissionDate = new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" });

    await transporter.sendMail({
      from: `"${process.env.SITE_NAME} Contact Form" <${process.env.INTERNAL_EMAIL_USERNAME}>`,
      // to:process.env.INTERNAL_EMAIL_USERNAME,
            to: process.env.CONTACT_FORM_RECEIVER_EMAIL,

      subject: `New Contact Form Submission: ${inquiry || "General"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Inquiry Type:</strong> ${inquiry || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <blockquote>${message}</blockquote>
        <p><em>Received on: ${submissionDate}</em></p>
      `,
      replyTo: email,
    });

    // // Send data to n8n webhook
    await fetch(
      "https://digi-expo.app.n8n.cloud/webhook/cc504a5d-4563-48b5-b48f-dc4202a859fa",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          inquiry,
          message,
          salesType: inquiry
            ? inquiry.trim().toLowerCase().replace(/\s+/g, "")
            : "",
          submissionDate // 👈 send to n8n
        }),
      }
    );

    return res.status(200).json({
      success: true,
      message: "Contact submission sent successfully.",
    });

  } catch (error) {
    console.error("Contact Form Submission Error:", error);
    return res.status(500).json({
      success: false,
      message: "Error processing contact submission.",
      error: error.message,
    });
  }
}
