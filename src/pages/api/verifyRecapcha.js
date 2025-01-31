export default async function hanlderrecapcha(req,res){
    if(req.method !== 'POST'){
        return res.status(405).end();
    }
    const {recapchatoken}=req.body
    if(!recapchatoken){
        return res.status(400).json({error :'Recapcha token is required'})
    }

const secretKey=process.env.RECAPTCHA_SECRETKEY;
try{
    const respone =await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recapchatoken}`,{
        method:'POST',
    })
    const data =await respone.json()
    if(data.success){
        return res.status(200).json({success : true});
    }
else{console.error("Recaptcha verification failed:", data); // Log for debugging
    return res.status(400).json({ success: false, error: 'Invalid recaptcha token.' });
  }
} catch (error) {
  console.error("Error verifying recaptcha:", error);
  return res.status(500).json({ error: 'Failed to verify recaptcha.' })




}}