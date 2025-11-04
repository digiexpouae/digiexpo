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
import Table from  '../Empiredevelopments/table'
import Challenges from '../Empiredevelopments/challenges'
import Counter from '../Empiredevelopments/maincounter'
import Client from '../Empiredevelopments/aboutclient'
import Delivered from '../Empiredevelopments/delivered'
const kamdardevelopments = () => {
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
  const items = [
  {
    title: "Premier planned luxury through quality visuals.",
  },
  {
    title: "Provide hassle-free navigation and quick speed.",
  },
  {
    title: "Increase the visibility by optimizing SEO.",
  },
  {
    title: "Intricately represent their architectural excellence.",
  }
];

  const desc='DigiExpo followed the four-stage process of changing the online presence of Empire Developments.'
  const features=[
  {
    "title": "Advanced Visual Identity",
    "description": "Kamdar Developments required a web presence that reflected their upscale brand image. Our design team created a smooth, modern, and light visual identity that aligned with the company’s luxurious aesthetic."
  },
  {
    "title": "Smooth User Experience",
    "description": "The previous website lacked user-friendliness. Digiexpo introduced simplified navigation and engaging visuals to improve usability, enabling visitors to explore Kamdar’s portfolio effortlessly."
  },
  {
    "title": "Reactive and Adaptive Design",
    "description": "Recognizing that most UAE users browse via mobile devices, we implemented a fully responsive design. The site maintains consistent performance and design quality across all screen sizes and devices."
  },
  {
    "title": "Performance Optimization",
    "description": "To enhance user retention and SEO performance, we optimized load speeds, implemented advanced caching, and refined content delivery for a seamless, high-speed browsing experience."
  }
]

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
      const title=<>Kamdar <br /> Developments</>
      const text='Kamdar Developments stands out among the top luxury real estate developers in the UAE with innovation, luxury, and architectural excellence. They blend modern designs and real-life functionality in their projects that provide both leisure and business properties with the actual presentation of application and beauty.'

  return (
    <div>
  <Header />
  <Herosection image={"/assets/img/casestudies/Kamdar copy.png"} text1={title} text2={text}/>
 <Table title={'Kamdar Developments'} text={'DigiExpo developed a restored modern website at the request of Kamdar Developments that portrays their brand of luxury and engineering marvel.'}
titleone={'Industry'}
srclink={'/assets/kamdarcompressed.mp4'}
textone={'Real Estate'}
titletwo={'Technologies'}
texttwo={'Web Development'}
titlethree={'Launched'}
textthree={'2025'}
titlefour={'Country'}
textfour={'UAE'}
 
 />


 <Challenges features={features}/>
<Client  srclink={"/assets/img/casestudies/Kamdar copy.png"} title={<>Experience the Future<br /> of Modern Living</>} text={'Kamdar Developments is the re-invention of luxury living in the UAE with its high walls and modern architecture. They wanted a place that would represent their fancy projects and portray the elegance of their brand and innovation.'}
titleone={'Our Services For Kamdar Developments.'}
textone={'DigiExpo created a visual and luxurious site that showcases real estate projects of Kamdar Developments in a high-end manner. All the designing aspects, including the layout the movement, were geared towards emphasizing their status as innovators in the realm of modern luxury development. The site combines effective navigation, mesmerizing images, and smooth responsiveness, which provides a visitor with an engaging digital experience in line with the vision of the brand.'}/>

 <Delivered properties={properties} title={'What We Delivered'} text={'Kamdar Developments has a very receptive, search engine-friendly website that brings out their opulent shelter identity but offers an easy user experience. The site reflects the sophistication, reliability, and innovation of the Kamdar brand.'} items={items}
 
 heading={'The website was built to:'}
 />
  <Counter />
  {/* <Section2 text={'Kamdar Development is a distinguished real estate developer recognized for crafting exceptional luxury residential and commercial spaces. With a strong commitment to quality, innovation, and timeless design, the company has built a reputation for delivering landmark projects that redefine modern living.'}/> */}
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

export default kamdardevelopments
 
  {/* <Section2 text={'Empire Developments is a premier real estate developer known for creating iconic, luxury residential and commercial properties. With a reputation for excellence and innovation, they sought a digital partner to build a website that reflected their premium brand and could effectively market high-value projects to an elite audience.'}/> */}

