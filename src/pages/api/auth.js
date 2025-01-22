import axios from 'axios'
// Replace with your credentials and tokens
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
let accessToken = process.env.ACCESS_TOKEN;
const refreshToken = process.env.REFRESH_TOKEN;

// Function to get the access token (either by refreshing or from initial access)
async function getAccessToken() {
  try {
    if (!accessToken) {
      console.log('Access token is not available, initiating OAuth flow...');
      return await refreshAccessToken();
    }

    // Check if the token is expired by sending a test request (optional)
    const response = await axios.get('https://www.zohoapis.com/crm/v2/lead', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    return accessToken; // If the request is successful, the token is still valid.
  } catch (error) {
    // If the token is expired or invalid, refresh it
    if (error.response && error.response.status === 401) {
      console.log('Access token expired or invalid, refreshing...');
      return await refreshAccessToken();
    }
    throw new Error('Error getting access token: ' + error.message);
  }
}

// Function to refresh the access token
async function refreshAccessToken() {
  try {
    const response = await axios.post('https://accounts.zoho.com/oauth/v2/token', null, {
      params: {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      },
    });
    accessToken = response.data.access_token; // Update the access token
    console.log('Access token refreshed:', accessToken);
    return accessToken;
  } catch (error) {
    console.error('Error refreshing access token:', error.response?.data || error.message);
    throw new Error('Error refreshing access token');
  }
}

// Function to send data to Zoho CRM
export async function sendDataToZoho(formdata) {
  try {
    const token = await getAccessToken(); // Get the valid access token
    const response = await axios.post(
      'https://www.zohoapis.com/crm/v2/Leads',
      { data: [formdata] },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('Data sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending data:', error.response?.data || error.message);
  }
}

// Example user data


// Call the function

