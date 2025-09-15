export default async function hanlderrecapcha(req,res){
    if(req.method !== 'POST'){
        return res.status(405).end();
    }
    const { recaptchaToken}=req.body
    if(!recaptchaToken){
        return res.status(400).json({error :'Recapcha token is required'})
    }

const secretKey=process.env.RECAPTCHA_SECRETKEY;
try{
    const respone =await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${ recaptchaToken}`,{
        method:'POST',
    })
    const data =await respone.json()
       if (data.success) { // Adjust score threshold as needed
      // reCAPTCHA verification successful, proceed with action
      return res.status(200).json({ message: 'Form submitted successfully!' });
    } 
else{console.error("Recaptcha verification failed:", data); // Log for debugging
    return res.status(400).json({ success: false, error: 'Invalid recaptcha token.' });
  }
} catch (error) {
  console.error("Error verifying recaptcha:", error);
  return res.status(500).json({ error: 'Failed to verify recaptcha.' })




}}