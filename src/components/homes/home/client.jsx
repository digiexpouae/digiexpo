
import Image from "next/image"
import Slider from "./slider"
const client=()=>{
    return(
        <div className=" tw-w-full tw-bg-[#6617E5] tw-py-20 tw-flex tw-items-start tw-justify-center">
<div className="tw-h-full tw-w-full  tw-flex tw-flex-col tw-items-center tw-gap-4 tw-justify-center">
<h2 className="tw-text-3xl tw-max-w-5xl tw-mx-auto md:tw-text-5xl tw-px-4 tw-text-center tw-text-white tw-font-semibold"> What Clients Say About Us</h2>
<p className="tw-text-[#FFFFFF99] tw-max-w-5xl tw-mx-auto tw-px-4 tw-text-center">Real feedback from brands that trusted DigiExpo for their digital growth.</p>
<div className="tw-grid tw-grid-cols-2 tw-mb-4 tw-max-w-5xl tw-mx-auto md:tw-flex  tw-items-center tw-gap-4 tw-justify-between">
<div className="tw-w-full "><Image src="/assets/img/client/clutch.svg" width={100} height={50} /></div>
<div className="tw-w-full "><Image src="/assets/img/client/googlereviews.svg" width={100} height={50} /></div>
<div className="tw-w-full "><Image src="/assets/img/client/bark.svg" width={100} height={50} /></div>
<div className="tw-w-full "><Image src="/assets/img/client/trustpilot.svg" width={100} height={50} /></div>




</div>

 <Slider/>






</div>
</div>




    )
}
export default client 