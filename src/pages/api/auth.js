// import nodemailer from "nodemailer";
async function refreshAccessToken() {
  try {
    const params = new URLSearchParams();
    params.append("client_id", process.env.CLIENT_ID);
    params.append("client_secret", process.env.CLIENT_SECRET);
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", process.env.REFRESH_TOKEN);

    const response = await fetch("https://accounts.zoho.com/oauth/v2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error ${response.status}: ${errorText}`);
    }

    const data = await response.json();

    const accessToken = data.access_token;

    return accessToken;
  } catch (error) {
    console.error(
      "Error refreshing access token:",
      error.response?.data || error.message
    );
    throw new Error("Error refreshing access token");
  }
}
function splitName(name) {
  
  if (!name) return { firstName: '', lastName: '' }; // Ensure we don't try to split an empty or undefined string
  const nameParts = name.split(" ");
  const firstName = nameParts[0] || ''; // Get the first part or empty string if undefined
  const lastName = nameParts[1] || '';  // Get the second part or empty string if undefined
  return { firstName, lastName };
}
export default async function sendDataToZoho(req, res) {
  try {
    const accessToken = await refreshAccessToken();
    // in this formData variable, you will get data from frontend. Jsut map it with payload below and remove dummy data
    const formData = req.body;
    
    const info = JSON.parse(formData);
    const { name, email, inquiry, phone, message } = info;
    
    const fullName=splitName(name);
    
    const { firstName, lastName } =fullName;

    const zohoLeadData = {
      data: [
        {
          Last_Name: lastName ?? "N/A",
          First_Name: firstName,
          Email: email,
          Phone: phone,
          Lead_Source: "Website",
          Title: inquiry,
          Description: message,
        },
      ],
    };

    const response = await fetch("https://www.zohoapis.com/crm/v2/Leads", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(zohoLeadData),
    });
    
    // if (!response.ok) {
    //   // const errorText = await response.text();
    //   // throw new Error(`Error sending data : ${errorText}`);
    // }

    const data = await response.json();
    
    if(data.status=200){
      const nodemailer = require("nodemailer"); 
    
      const testConfig = {
      host: "sandbox.smtp.mailtrap.io",
      auth: {
        user: "918c11ae60fba8", 
        pass: "9d0b0d9d2dc6f3",
      },
    };

    const prodConfig = {
      host: "smtp.zoho.com",
      port: 465, 
      secure: true, 
      auth: {
        user: "sales@digiexpo.ae", 
        pass: "Futurewave12@45", 
      },
    };


    const config = process.env.NODE_ENV === 'production' ? prodConfig : testConfig
    const transporter = nodemailer.createTransport(config);
    
    await transporter.sendMail({
      from:`sales@digiexpo.ae`,
      to:email,
      subject: `New Contact Form Submission: ${inquiry}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Inquiry Type:</strong> ${inquiry}</p>
        <p><strong>Message:</strong></p>
        <blockquote>Thankyou for connecting with us.</blockquote>
        <p><em>Received on: ${new Date().toLocaleString()}</em></p>
      `,
      replyTo: email
    });
    return res.status(200).json({ message: "Data sent successfully ",success:true });
  }else{
    return res.status(500).json({ message: "Data not sent successfully ",error:true});
  }
  } catch (error) {
    console.error("Error sending data:", error);

    return res.status(500).json({ message: "Error sending data ",error:error.message });
  }
}
