import Image from "next/image";
const casestudy=({img})=>{
    return (
        <div className=" tw-w-full tw-my-10">
            <div className=" tw-max-w-5xl tw-mx-auto tw-h-[80%] tw-relative tw-flex tw-items-center tw-justify-center">
                    <Image src={img} width={800} height={800} alt="theme-pure" />
                </div>
                
            </div>
    )
}
export default casestudy