import React from 'react'
import Herosection from './herosection'
import Header from "@/layout/headers/header-3"
import Footer from "@/layout/footers/footer-4"
import Section8 from '../about2/section8'
import Section from '../about2/section2'
 import ContactArea from '../../components/homes/home/contact-area'
import Section2 from './section2'
import Section3 from './section3'
import Section4 from '../about2/section7'
import Section5 from './section4'
import Table from './table'
import Counter from  './maincounter'
import Challenges from './challenges'
import Delivered from './delivered'
import Client from './aboutclient'
const empire = () => {
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


      const text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue enim, varius elementum nulla ut, accumsan tristique lacus. Donec quis dolor sed turpis finibus bibendum vel a nisl. Curabitur at diam justo. Quisque varius vestibulum quam, i'

  return (
    <div>
  <Header />
  <Herosection image={"/assets/img/casestudies/Empire copy.png"} text1={<>Empire <br />Developments</>} text2={text}/> 
   <Table
   text={'Empire Developments is a premier real estate developer known for creating iconic, luxury residential and commercial properties. With a reputation for excellence and innovation, they sought a digital partner to build a website that reflected their premium brand and could effectively market high-value projects to an elite audience.'}
   title={'Empire Developments'}
srclink={'/assets/empire_small.mp4'}
textone={'Real Estate'}
titletwo={'Technologies'}
texttwo={'Web Development'}
titlethree={'Launched'}
textthree={'2025'}
titlefour={'Country'}
textfour={'UAE'}
    />
  {/* <Section2 text={'Empire Developments is a premier real estate developer known for creating iconic, luxury residential and commercial properties. With a reputation for excellence and innovation, they sought a digital partner to build a website that reflected their premium brand and could effectively market high-value projects to an elite audience.'}/> */}
 <Challenges />
<Client srclink={"/assets/img/casestudies/Empire copy.png"} />
 <Delivered />
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
