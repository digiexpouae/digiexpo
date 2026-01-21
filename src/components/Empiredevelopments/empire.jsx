import React from 'react'
import Herosection from './herosection'
import Header from "@/layout/headers/header-2"
import Footer from "@/layout/footers/footer-4"
import Section8 from '../about2/section8'
import Section from '../about2/section2'
import ContactArea from '../../components/homes/home/contact-area'
import Section2 from './section2'
import Section3 from './section3'
import Section4 from '../about2/section7'
import Section5 from './section4'
import Table from './table'
import Counter from './maincounter'
import Challenges from './challenges'
import Delivered from './delivered'
import Client from './aboutclient'
const empire = () => {
  const items = [
    {
      title: "Instill luxury developments with visually appealing images.",
    },
    {
      title: "Enhance interaction through easy navigation.",
    },
    {
      title: "Ensure quick loading and high level of security.",
    },
    {
      title: "Present the information in a clear manner with optimized information.",
    },
    {
      title: "Reflect the Empire Developments vision along with its sophistication and confidence.",
    }
  ];
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
  const desc = 'DigiExpo followed the four-stage process of changing the online presence of Empire Developments.'
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
  const features = [
    {
      title: "Modern and Attractive Layout",
      description:
        "They wanted a website that would display their luxury brand image. Our web designers have designed a special layout where they presented their works in a graceful and modern way.",
    },
    {
      title: "User-Friendly Experience",
      description:
        "Empire Developments needed a website that was easy to use so that the visitors would be able to see their projects easily. Digiexpo focuses on the smooth navigation and user friendliness of pages, so that the process of navigation is easy",
    },
    {
      title: "Responsive Design",
      description:
        "Most of the users in the UAE access the sites with their mobile devices, and thus, we have designed a responsive site that will allow a consistent performance and accessibility of the site across all screen sizes.people mostly use their phones to access any site as it is convenient and simple to do. We developed a responsive website for IMC so that they could reach all of their target audience regardless of their devices.",
    },
    {
      title: "Optimized Performance",
      description:
        "On-page optimization and rapid load times were applied to improve user experience and search visibility.",
    },
  ];


  const text = 'Empire Developments is a leading UAE-based real estate developer known for developing luxury residential and commercial real estate. Having a strong emphasis on innovation and design excellence, they have created new standards in the real estate business by their luminous projects and architectural genius.'

  return (
    <div>
      <Header />
      <Herosection image={"/assets/img/casestudies/Empire copy.png"} imagemob={"/assets/img/herowebp/empiredevelopment.png"} text1={<>Empire <br />Developments</>} text2={text} bgVariant="empire" />
      <Table
        text={'DigiExpo developed a smooth and glamorous site as requested by Empire Developments. The website exemplifies their high-end real estate brand and highlights their luxurious developments with sophistication.'}
        title={'Empire Developments'}
        srclink={'/assets/empire_small.mp4'}
        textone={'Real Estate'}
        titletwo={'Technologies'}
        texttwo={'Website Development'}
        titlethree={'Launched'}
        textthree={'2025'}
        titlefour={'Country'}
        textfour={'UAE'}
      />
      {/* <Section2 text={'Empire Developments is a premier real estate developer known for creating iconic, luxury residential and commercial properties. With a reputation for excellence and innovation, they sought a digital partner to build a website that reflected their premium brand and could effectively market high-value projects to an elite audience.'}/> */}
      <Challenges features={features} />
      <Client srclink={"/assets/img/casestudies/Empire copy.png"} title={<>Experience the Art <br /> of Modern Real Estate</>} text={'Empire Developments represents one of the best luxury real estate developments in the UAE, and has the best residential and commercial developments in the world. They required an online platform to present their work gracefully and accurately.'}
        titleone={'Our Services For Empire Developments.'}
        textone={'DigiExpo designed a modern and attractive website for Empire Developments. The purpose of this website was to present a contemporary image of the brand and its luxury. The development of the site focused on providing high-quality visuals, navigation, and proper presentation of their projects. Every aspect of design and features was expounded to highlight their position as a high-end real estate developer.'}
      />
      <Delivered properties={properties} title={'What We Delivered'} text={'Empire Developments now has a modern and responsive SEO friendly website that was designed and delivered by our web development team. Their luxury real estate identity is represented in a very beautiful way by the new design and offers a perfect user experience.'} items={items}

        heading={'The website was built to:'}
      />
      <Counter />
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
