import React from 'react'
import Herosection from '../Empiredevelopments/herosection'
import Header from "@/layout/headers/header-2"
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
  const items = [
    {
      title: "Present logistics services clearly and illustrated in a high-quality manner.",
    },
    {
      title: "Improve the interface with user interaction.",
    },
    {
      title: "Ensure high loading speed and safe browsing.",
    },
    {
      title: "Exemplify Saami’s vision and operational excellence.",
    }
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


  const desc = 'DigiExpo followed the four-stage process to increase the digital presence of Saami Tradestar:'
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
  const title = <>Saami <br /> Tradestar</>
  const text = 'Saami Tradestar is a reliable logistics company in India that offers several logistics services, such as freight forwarding, warehousing, transportation, spare parts, and even customs clearance services. Over 20 years of record of providing effective and consistent supply chain solutions across the world speaks volumes.'

  return (
    <div>
      <Header />
      <Herosection image={"/assets/img/herowebp/saamibg-2.webp"} text1={title} text2={text} bgVariant={"saami"} />
      <Table title={'Saami Tradestar'} text={'DigiExpo has designed a new and convenient platform for Saami Tradestar that reflects their professionalism and evidences their broad scope of logistical services.'}
        titleone={'Industry'}
        srclink={'/assets/saami_compressed.mp4'}
        textone={'Logistics and Supply Chain'}
        titletwo={'Technologies'}
        texttwo={'Website Development and social media content.'}
        titlethree={'Launched'}
        textthree={'2025'}
        titlefour={'Country'}
        textfour={'India'}

      />


      <Challenges features={features} />
      <Client srclink={"/assets/img/casestudies/Saami copy.png"} title={<>Experience Reliable<br /> Logistics Services</>} text={'The site now serves as an online center of operation of Saami Tradestar, showing their professionalism, the variety of services, and experience in the industry.'}
        titleone={'Our services for Saami Tradestar.'}
        textone={'The strategy of the website and social media content created by DigiExpo represents the logistics services of Saami Tradestar, focusing on clarity, quality of images, and a clean user experience.'}


      />

      <Delivered properties={properties} title={'What We Delivered'} text={'Saami Tradestar is equipped with a modern, responsive, and SEO-friendly website and interesting content on social media. '} items={items}

        heading={'The website was built to:'}
      />

      <Counter />
      {/* <Section2 text={'Saami Tradestar is a leading global shipping and logistics company known for delivering reliable, efficient, and innovative transportation solutions. With a strong commitment to excellence, safety, and sustainability, the company has built a reputation for connecting businesses worldwide through seamless maritime and freight services.'}/> */}
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
