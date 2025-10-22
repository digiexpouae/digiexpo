import React from 'react'
import Image from 'next/image'
const section3 = () => {
    const issues = [
         {
    title: "Outdated Digital Presence",
    description:
      "Their existing website failed to capture the luxury and sophistication of their projects.",
  },
  {
    title: "Poor User Experience",
    description:
      "Potential buyers found it difficult to navigate property listings and access key information.",
  },
  {
    title: "Low Lead Generation",
    description:
      "The site was not optimized to convert visitors into qualified leads.",
  },
  {
    title: "Mobile Unfriendliness",
    description:
      "The website was not responsive, leading to a poor experience on smartphones and tablets.",
  },
];

  return (
    <div className='tw-max-w-5xl tw-mx-auto'>
      <h2 className='tw-text-4xl tw-text-center'>Challenges Faced</h2>

<div className="tw-grid tw-gap-2 tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-py-10 tw-px-4">
  {issues.map((elem, index) => (
    <div
      key={index}
      className="tw-flex tw-flex-col tw-px-4 tw-py-4 tw-w-full tw-rounded-xl tw-bg-[#F4EFFF]"
    >
      <div className="tw-mb-4">
        <Image
          src="/assets/img/casestudies/target.svg"
          width={60}
          height={60}
          alt="Icon"
        />
      </div>
      <h2 className="tw-text-lg tw-font-semibold tw-mb-2">
      {elem.title}
      </h2>
      <p className="tw-text-sm tw-text-black">
{elem.description}
      </p>
    </div>
  ))}
</div>


    </div>
  )
}

export default section3
