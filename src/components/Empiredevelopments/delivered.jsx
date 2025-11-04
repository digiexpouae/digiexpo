import React from 'react';
// import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';


const PropertiesGrid = ({title,text,items,heading,properties}) => {
  return (
    <section className="tw-bg-gray-900 tw-bg-gradient-to-r tw-from-[#0f0f1a] tw-to-[#1a0f2b] md:tw-h-screen tw-px-4 sm:tw-px-6 lg:tw-px-8"     style={{
    backgroundColor: '#75568b', // fallback for very old browsers
    // backgroundImage: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)',
  }}
>
      <div className="tw-max-w-7xl tw-h-full tw-flex tw-items-center tw-justify-center tw-mx-auto">
        <div className="tw-flex tw-flex-col md:tw-flex-row md:tw-justify-between tw-gap-6 tw-p-6 md:tw-items-center tw-mb-12">
          <div className="tw-mb-8 md:tw-mb-0  tw-h-full tw-flex tw-items-start tw-flex-col tw-justify-start">
            <h2 className="tw-text-4xl tw-font-bold tw-text-white tw-mb-4">{title}</h2>
            <p className="tw-text-gray-300 tw-max-w-2xl tw-text-black">
{text}</p>
<div>
      <h2 className='tw-text-2xl text-white '>{heading}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      </div>
    </div>        
    <div>   <h2 className='text-white mb-4'>
Key Highlights:</h2>
            <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
              
          {properties.map((property) => (
            <div key={property.id} className="tw-rounded-lg tw-overflow-hidden   tw-p-4" style={{border:'2px solid white'}}>
                <div className='tw-flex tw-flex-col tw-w-full tw-items-start tw-justify-start'>
   
              <div className="tw-relative  tw-overflow-hidden  tw-flex tw-items-center tw-justify-center">
                <Image
                  src='/assets/img/casestudies/check.webp'
                  alt={property.title}
                
                  width={20}
                  height={20}
                  className=" tw-object-cover tw-transition-transform hover:tw-scale-105 tw-duration-500"
                />
              </div>
              </div>
              <div className="tw-py-4 px-2s">
                <h3 className="tw-text-sm tw-text-white tw-font-semibold tw-mb-1">{property.title}</h3>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
                
</div>

    
    </section>
  );
};

export default PropertiesGrid;