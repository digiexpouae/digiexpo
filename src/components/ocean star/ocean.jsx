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
      title: "Consistent Branding",
    },
    {
      id: 2,
      title: "Engaging Visual Content",
    },
    {
      id: 3,
      title: "Targeted Audience Growth",
    },
    {
      id: 4,
      title: "Optimized Posting Schedule",
    },
    {
      id: 5,
      title: "Analytics-Based Improvement",
    },
    {
      id: 6,
      title: "Strong Brand Awareness",
    }
  ];

  const desc = 'DigiExpo has followed the four-stage process to increase the online presence of Ocean Star Shipping Logistics.'

  const items = [
    {
      title: "Increase brand awareness on various social media.",
    },
    {
      title: "Develop a regular activity by making regular posts informative and creative.",
    },
    {
      title: "Grow enquiries and audience through performance strategies.",
    },
    {
      title: "Show the professionalism and credibility of the brand.",
    }
  ];

  const steps = [
    {
      title: "Discovery & Strategy",
    },
    {
      title: "Design and Development of Content.",
    },
    {
      title: "Implementation and Campaign Management.",
    },
    {
      title: "Monitoring and Optimization.",
    },

  ];
  const features = [
    {
      title: "Limited Online Presence",
      description:
        "Ocean Star Shipping Logistics was interested in the desire to be strongly represented on the social media platforms to be able to compete with other logistics providers. The marketing team came up with a narrow content approach that emphasized their dependability and broad scope of logistics offerings.",
    },
    {
      title: "Content Engagement",
      description:
        "DigiExpo made the complex logistics concepts simple and understandable through publication of attractive and informative posts without making the content boring or unprofessional.",
    },
    {
      title: "Platform Consistency",
      description:
        "It was necessary to have a coherent and cohesive brand image. We also made sure that the brand tone, visuals and the content of Ocean Star Shipping are consistent across such platforms as LinkedIn, Instagram and Facebook.",
    },
    {
      title: "Performance and Growth Optimization",
      description:
        "Digiexpo used data-driven approaches, optimal posting schedules and analytics monitoring kept changing the performance and audience growth.",
    }
  ];


  const text = 'Ocean Star Shipping Logistics LLC is one of the biggest logistic and freight forwarding companies in the UAE, which provides effective logistics and freight forwarding solutions in freight forwarding, clearance, warehousing, and transportation. They have years of experience of trusted service and have earned a good reputation of offering good and prompt logistics services through global networks.'

  return (
    <div>
      <Header />
      <Herosection image={"/assets/img/herowebp/oceanbg-2.webp"} text1={<>Ocean Star Shipping <br />Logistics LLC.</>} text2={text} bgVariant={'ocean'} />
      <Table title={'Ocean Star Shipping Logistics LLC.'}
        text={'DigiExpo conducted a strategic social media marketing campaign on behalf of the ocean star shipping logistics to increase their visibility over the internet, build their brand equity and develop an interesting relationship with their target consumers.'}

        titleone={'Industry'}
        textone={'Logistics & Supply Chain'}
        titletwo={'Technologies'}
        texttwo={'Social Media Marketing, Content, Brand awareness.'}
        titlethree={'Launched'}
        textthree={'2025'}
        titlefour={'Country'}
        textfour={'UAE'}

        srclink={'/assets/ocean_compressed.mp4'}
      />
      <Challenges features={features} />
      <Client srclink={"/assets/img/casestudies/oss.png"} title={<>Experience Smart and Reliable<br />Logistics Solution</>} text={'Ocean Star Shipping Logistics is a symbol of reliability, speed and trust in the logistic industry. They needed an effective online presence, which can be characterized as their professional services and international network.'}
        titleone={'Our Services For Ocean Star Shipping Logistics LLC'}
        textone={'DigiExpo created and executed an entire social media marketing campaign for Ocean Star Shipping. The campaign was planned to create the content, design the visuals, conduct research on the hashtag, schedule the posts, and track the analytics. It was directed towards the positioning of their services (freight forwarding, warehousing, customs clearance, and transportation) in a clear and appealing way.'} />

      <Delivered properties={properties} title={'What We Delivered'} text={"Ocean Star Shipping Logistics now enjoys an effective and professional social media presence which resonates well with the target sector and is a reflection of the company's vision of being the best in the field of logistics."} items={items}

        heading={'The campaign was designed to:'}
      />
      {/* <Counter /> */}
      {/* <Section2 text={'Oceanstar Shipping is a leading global logistics and maritime company specializing in efficient, reliable, and sustainable shipping solutions. With decades of industry expertise, they sought a digital partner to create a website that showcases their worldwide operations, strengthens client trust, and highlights their commitment to innovation and environmental responsibility.'}/> */}
      {/* <Section3 /> */}
      {/* <Section className={'!tw-hidden'} /> */}
      <Section4 maintitle={'Process'} classhead={'!tw-mb-3'} text={true} desc={desc} steps={steps} className={'!tw-grid-cols-2  lg:!tw-grid-cols-2 md:!tw-w-[80%]'} />
      <Section5 />

      <Section8 />
      <ContactArea />
      <Footer />
    </div>
  )
}

export default empire
