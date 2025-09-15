import ContactUsFormMuz from "./contact-us-form-muz";
import dynamic from "next/dynamic";
const RecaptchaWrapper = dynamic(() => import("../components/Provider/googlerecaptchaprovider"), { ssr: false });const contactmuzz=()=>{
    return(
<RecaptchaWrapper>
    <ContactUsFormMuz/>
</RecaptchaWrapper>
    )
}
export default contactmuzz