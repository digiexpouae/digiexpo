import Image from "next/image";
const aboutclient=({srclink,title,text,titleone,textone})=>{
    return(
        <div className="tw-w-full tw-py-20 tw-flex tw-items-center tw-justify-center">
<div className="tw-max-w-6xl tw-mx-auto tw-px-4 tw-flex tw-flex-col tw-items-start tw-justify-start">
<div className="tw-flex tw-flex-col tw-max-w-3xl">
            <h2 className="tw-text-4xl tw-font-semibold">{title}</h2>
            <p>{text}</p>
           </div>
           <div className=" tw-flex-col tw-flex md:tw-flex-row tw-gap-4">

<div className="tw-rounded-2xl tw-flex tw-flex-col tw-justify-center  tw-bg-gradient-to-r tw-from-[#0f0f1a] tw-to-[#1a0f2b]  w-full md:tw-w-1/2 md:tw-h-96 tw-p-6 ">
<h1 className="tw-text-3xl">{titleone}</h1>
<p>{textone}</p></div>
<div className=" tw-rounded-2xl tw-flex tw-flex-col tw-relative tw-bg-gradient-to-r tw-from-[#0f0f1a] tw-to-[#1a0f2b]   w-full md:tw-w-1/2  tw-h-96 tw-p-6">
<Image src={srclink} fill className="tw-object-cover tw-rounded-2xl" alt="theme-pure" />
        
        </div>   </div>
           
           </div>
        </div>
    )
}
export default aboutclient