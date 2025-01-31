

async function refreshAccessToken() {
  try {
    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("client_secret", clientSecret);
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", refreshToken);

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
function splitName(fullName) {
  const nameParts = fullName.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" "); // Handles multiple last names
  return { firstName, lastName };
}
export default async function sendDataToZoho(req, res) {
  try {
    const accessToken = await refreshAccessToken();
    // in this formData variable, you will get data from frontend. Jsut map it with payload below and remove dummy data
    const formData = req.body;
    const info = JSON.parse(formData);
    const { name, email, inquiry, phone, message } = info;

    const { firstName, lastName } = splitName(name);

    const zohoLeadData = {
      data: [
        {
          Last_Name: lastName ?? "N/A",
          First_Name: firstName,
          Email: email,
          Phone: phone,
          Lead_Source: "Website",
          Designation: inquiry,
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

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error sending data : ${errorText}`);
    }

    const data = await response.json();

    return res.status(200).json({ message: "Data sent successfully " });
  } catch (error) {
    console.error("Error sending data:", error);

    return res.status(500).json({ message: "Error sending data " });
  }
}
