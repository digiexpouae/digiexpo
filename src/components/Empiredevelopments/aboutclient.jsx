import Image from "next/image";
const aboutclient=()=>{
    return(
        <div className="tw-w-full tw-py-20 tw-flex tw-items-center tw-justify-center">
<div className="tw-max-w-6xl tw-mx-auto tw-px-4 tw-flex tw-flex-col tw-items-start tw-justify-start">
<div className="tw-flex tw-flex-col tw-max-w-3xl">
            <h2 className="tw-text-4xl tw-font-semibold">Experience the Luxury of <br /> Personalized Beauty</h2>
            <p>e Galleria is a beauty salon in Dubai, UAE where people can get expert beauty services related to hair and nails. They provide their services at a place loaded with elegance and sophistication. All their team members are highly professional and dedicated to their work, offering world-class experience.</p>
           </div>
           <div className=" tw-flex-col tw-flex md:tw-flex-row tw-gap-4">

<div className="tw-rounded-2xl tw-flex tw-flex-col tw-justify-center  tw-bg-gradient-to-r tw-from-[#0f0f1a] tw-to-[#1a0f2b]  w-full md:tw-w-1/2 md:tw-h-96 tw-p-6 ">
<h1 className="tw-text-3xl">Our Services for The Galleria</h1>
<p>Digital Gravity was given the task of developing a sleek and attractive website for The Galleria. They wanted a website that could represent them in a way that the user would instantly get drawn to them. Their team had asked for a visually appealing yet well-functional site to make a good impression on their visitors’ minds. Our web designers worked hard to create a layout and design that could match The Galleria’s brand image. We stumbled upon some bugs on the way but they were handled professionally. All of our team members enjoyed working on this interesting website.</p></div>
<div className=" tw-rounded-2xl tw-flex tw-flex-col tw-relative tw-bg-gradient-to-r tw-from-[#0f0f1a] tw-to-[#1a0f2b]   w-full md:tw-w-1/2  tw-h-96 tw-p-6">
<Image src={"/assets/img/casestudies/Empire copy.png"} fill className="tw-object-cover tw-rounded-bl-2xl tw-rounded-br-2xl" alt="theme-pure" />
        
        </div>   </div>
           
           </div>
        </div>
    )
}
export default aboutclient