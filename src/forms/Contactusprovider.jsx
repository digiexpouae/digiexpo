import ContactUsForm from "./contact-us-form";
import dynamic from "next/dynamic";
const RecaptchaWrapper = dynamic(() => import("../components/Provider/googlerecaptchaprovider"), { ssr: false })
const contactus=()=>{
    return(
<RecaptchaWrapper>
    <ContactUsForm />
</RecaptchaWrapper>
    )
}
export default contactus