import React from 'react'
import Herosection from '../Empiredevelopments/herosection'
import Header from "@/layout/headers/header-3"
import Footer from "@/layout/footers/footer-4"
import Section8 from '../about2/section8'
import Section from '../about2/section2'
 import ContactArea from '../../components/homes/home/contact-area'
import Section2 from '../Empiredevelopments/section2'
import Section3 from '../Empiredevelopments/section3'
import Section4 from '../about2/section7'
import Section5 from '../Empiredevelopments/section4'
import Table from '../Empiredevelopments/table'
import Challenges from '../Empiredevelopments/challenges'
import Client from '../Empiredevelopments/aboutclient'
import Delivered from '../Empiredevelopments/delivered'
import Counter from '../Empiredevelopments/maincounter'
const empire = () => {
  const properties = [
  {
    id: 1,
    title: 'Attractive Design',
  },
  {
    id: 2,
    title: 'Optimized Site Speed',
  },
  {
    id: 3,
    title: 'Advanced Security',
  },
  {
    id: 4,
    title: 'Engaging Content',
  },
   {
    id: 3,
    title: 'Responsive Website',
  },
  {
    id: 4,
    title: 'Accessibility',
  },
];
  const features = [
  {
    title: "Modern and Attractive Layout",
    description:
      "Saami Tradestar wanted a website that represents their logistics services in a professional manner. Our team designed a clean and modern layout that highlights their operations and services with clarity and elegance.",
  },
  {
    title: "User-Friendly Experience",
    description:
      "Customers needed quick access to service information, shipment details, and contact options. Digiexpo focused on intuitive navigation and an easy-to-use interface to enhance user interaction and satisfaction.",
  },
  {
    title: "Responsive and Mobile-Ready Design",
    description:
      "Since most users access the site through mobile devices, DigiExpo ensured complete responsiveness and compatibility across all devices and screen sizes for a seamless browsing experience.",
  },
  {
    title: "Web Development and Optimized Performance",
    description:
      "To boost visibility and reliability, we developed a fully responsive website with fast load times, high security, and an SEO-friendly structure for better performance and search presence.",
  }
];
const items = [
  {
    title: "Showcase services with clear and high-quality visuals.",
  },
  {
    title: "Enhance user experience with intuitive interaction.",
  },
  {
    title: "Guarantee fast loading times and secure browsing.",
  },
  {
    title: "Reflect the brand’s vision and operational excellence.",
  }
];

  const desc='DigiExpo followed a strategic, four-phase approach to transform Empire Developments’ online presence:'
    const steps = [
        {
          title: "Discovery & Strategy",
        },
        {
          title: "UX/UI Design",
        },
        {
          title: "Development",
        },
        {
          title: "Testing & Launch",
        },
      
      ];
      const title=<>Live Water <br /> Tec Purifier</>
      const text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue enim, varius elementum nulla ut, accumsan tristique lacus. Donec quis dolor sed turpis finibus bibendum vel a nisl. Curabitur at diam justo. Quisque varius vestibulum quam, i'

  return (
    <div>
  <Header />
  <Herosection image={"/assets/img/casestudies/livewatertec.png"} text1={title} text2={text}/>
<Table title={'Livewater tec'}   text={'LiveWaterTec is a trusted leader in advanced water purification solutions, dedicated to providing clean, safe, and healthy drinking water for homes and businesses. With cutting-edge technology, eco-friendly systems, and a passion for innovation, the company delivers high-performance water purifiers designed to improve quality of life and promote sustainable living.'}   
  
  titleone={'Industry'}
  textone={'Logistics'}
  titletwo={'Technologies'}
  texttwo={'Web Development'}
  titlethree={'Launched'}
  textthree={'2025'}
  titlefour={'Country'}
  textfour={'UAE'}
  
 srclink={'/assets/live_compressed.mp4'}
  />
<Challenges features={features} />
<Client  srclink={"/assets/img/casestudies/livewatertec.png"} title={
  <>
    Experience Pure and Advanced<br />Water Purification Solutions
  </>
}
text={
  "LiveWaterTec stands as a trusted name in providing cutting-edge and eco-friendly water purification systems. They needed a strong online presence to reflect their technological innovation, product reliability, and commitment to healthier living."
}
titleone={"Our Digital Strategy for LiveWaterTec"}
textone={
  "DigiExpo designed and implemented a comprehensive digital marketing campaign for LiveWaterTec. The campaign focused on developing engaging content, designing clean and modern visuals, researching relevant keywords and hashtags, scheduling social media posts, and analyzing performance metrics. The goal was to highlight LiveWaterTec’s range of purifiers and filtration technologies in a visually appealing and informative manner."
}
/>
 <Delivered items={items}  properties={properties} title={'What We Delivered'}
text={
  'LiveWaterTec now has a dynamic, SEO-friendly website that highlights their expertise in providing pure and advanced water purification solutions. The site embodies the brand’s commitment to innovation, sustainability, and healthy living while offering users a smooth and intuitive browsing experience.'
}
 />
  <Counter />
{/* <Section2 text={'LiveWaterTec is a trusted leader in advanced water purification solutions, dedicated to providing clean, safe, and healthy drinking water for homes and businesses. With cutting-edge technology, eco-friendly systems, and a passion for innovation, the company delivers high-performance water purifiers designed to improve quality of life and promote sustainable living.'}/> */}
  {/* <Section3 /> */}
  {/* <Section className={'!tw-hidden'} /> */}
  <Section4 maintitle={'Process'} classhead={'!tw-mb-3'} text={true} desc={desc} steps={steps} className={'!tw-grid-cols-2  lg:!tw-grid-cols-2 md:!tw-w-[60%]'} />
  <Section5 />
  <Section8 />
  <ContactArea />
  <Footer />
    </div>
  )
}

export default empire
