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
      const title=<>Kamdar <br /> Developments</>
      const text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue enim, varius elementum nulla ut, accumsan tristique lacus. Donec quis dolor sed turpis finibus bibendum vel a nisl. Curabitur at diam justo. Quisque varius vestibulum quam, i'

  return (
    <div>
  <Header />
  <Herosection image={"/assets/img/casestudies/Kamdar copy.png"} text1={title} text2={text}/>
 <Table title={'Kamdar Development'} text={'Kamdar Development is a distinguished real estate developer recognized for crafting exceptional luxury residential and commercial spaces. With a strong commitment to quality, innovation, and timeless design, the company has built a reputation for delivering landmark projects that redefine modern living.'}
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


 <Challenges />
<Client />
 <Delivered />
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

export default empire
