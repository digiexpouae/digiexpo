import React from 'react';
// import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
const properties = [
  {
    id: 1,
    title: 'Attractive Design',
    location: 'Dubai Harbour, Dubai',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    title: 'Optimized Site Speed',
    location: 'Dubai South, Dubai',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    title: 'Advanced Security',
    location: 'Dubai Harbour, Dubai',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    title: 'Engaging Content',
    location: 'Dubai South, Dubai',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
   {
    id: 3,
    title: 'Responsive Website',
    location: 'Dubai Harbour, Dubai',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    title: 'Accessibility',
    location: 'Dubai South, Dubai',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
];

const PropertiesGrid = () => {
  return (
    <section className="tw-bg-gray-900 tw-bg-gradient-to-r tw-from-[#0f0f1a] tw-to-[#1a0f2b] md:tw-h-screen tw-px-4 sm:tw-px-6 lg:tw-px-8"     style={{
    backgroundColor: '#75568b', // fallback for very old browsers
    // backgroundImage: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)',
  }}
>
      <div className="tw-max-w-7xl tw-h-full tw-flex tw-items-center tw-justify-center tw-mx-auto">
        <div className="tw-flex tw-flex-col md:tw-flex-row md:tw-justify-between tw-gap-6 tw-p-6 md:tw-items-center tw-mb-12">
          <div className="tw-mb-8 md:tw-mb-0 md:tw-w-1/2 tw-h-full tw-flex tw-items-start tw-flex-col tw-justify-start">
            <h2 className="tw-text-4xl tw-font-bold tw-text-white tw-mb-4">What We Delivered</h2>
            <p className="tw-text-gray-300 tw-max-w-2xl tw-text-black">
In response to the request made by The Galleria, our web developers crafted a modern and well-optimized website for their salon. They had asked for a customized and attractive design to showcase their services and portfolio to their potential customers. The website itself was not very large so we did not face many issues or bugs while developing it. We worked hard to portray the level of comfort and expertise they provide at their salon. High-quality images and videos were added to give an insight into what customers can expect at The Galleria.            </p>
          </div>
            <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
          {properties.map((property) => (
            <div key={property.id} className="tw-rounded-lg tw-overflow-hidden   tw-p-4" style={{border:'2px solid white'}}>
                <div className='tw-flex tw-flex-col tw-w-full tw-items-start tw-justify-start'>
              <div className="tw-relative  tw-overflow-hidden tw-pl-4 tw-flex tw-items-center tw-justify-center">
                <Image
                  src='/assets/img/casestudies/check.webp'
                  alt={property.title}
                
                  width={20}
                  height={20}
                  className=" tw-object-cover tw-transition-transform hover:tw-scale-105 tw-duration-500"
                />
              </div>
              </div>
              <div className="tw-p-4">
                <h3 className="tw-text-sm tw-text-white tw-font-semibold tw-mb-1">{property.title}</h3>
              </div>
            </div>
          ))}
        </div>
        </div>

    
      </div>
    </section>
  );
};

export default PropertiesGrid;