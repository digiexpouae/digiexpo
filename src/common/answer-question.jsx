import React,{useState} from "react";
import answer_question_data from "../data/answer-question-data";

const AnswerQuestion = ({style}) => {
  const [shadow , setShadow ] = useState(2) 
  const answer_question=  [{
  id: 94,
  question: "Why do UAE brands trust this agency?",
  answer: <>UAE businesses trust DigiExpo because we don’t just build websites — we craft digital experiences that embody a brand’s story and vision. Our professional design team ensures every project reflects the client’s goals and values. DigiExpo merges creativity with strategy to turn ideas into impactful websites that attract attention and drive conversions. That’s why our clients see us as more than designers — they see us as long-term digital partners.</>,
  accordion_id: "headingNinetyFour",
  collapsed: "collapsed",
  data_bs_target: "#collapseNinetyFour",
  aria_controls: "collapseNinetyFour",
  active: "",
},
{
  id: 95,
  question: "What makes your design process unique?",
  answer: <>At DigiExpo, our design process is rooted in teamwork, research, and precision. We begin by analyzing audience behavior, brand objectives, and market trends. Then we move through wireframing, UI/UX design, and testing. Unlike most agencies, we involve our clients in every stage — ensuring full transparency, collaboration, and satisfaction throughout the project.</>,
  accordion_id: "headingNinetyFive",
  collapsed: "collapsed",
  data_bs_target: "#collapseNinetyFive",
  aria_controls: "collapseNinetyFive",
  active: "",
},
{
  id: 96,
  question: "Do you offer startup design packages UAE?",
  answer: <>Yes! We provide affordable design packages tailored for startups and small businesses in the UAE. Each plan includes responsive web design, basic SEO setup, and brand essentials to kickstart your online presence. DigiExpo ensures that high-quality design isn’t limited to big enterprises — we help new brands build strong digital foundations from day one.</>,
  accordion_id: "headingNinetySix",
  collapsed: "collapsed",
  data_bs_target: "#collapseNinetySix",
  aria_controls: "collapseNinetySix",
  active: "",
},
{
  id: 97,
  question: "Do you build custom enterprise websites?",
  answer: <>Yes, DigiExpo develops enterprise-level websites that are secure, scalable, and high-performing. We work with advanced frameworks like React, Laravel, and WordPress to deliver tailored digital solutions. Whether it’s a corporate portal or a complex eCommerce platform, our focus remains on performance, functionality, and clean UX — enabling smooth digital operations for businesses in the UAE.</>,
  accordion_id: "headingNinetySeven",
  collapsed: "collapsed",
  data_bs_target: "#collapseNinetySeven",
  aria_controls: "collapseNinetySeven",
  active: "",
},
{
  id: 98,
  question: "How does UX improve website results?",
  answer: <>A great user experience (UX) determines whether visitors stay, explore, and convert. At DigiExpo, we study user behavior to design intuitive interfaces that guide users effortlessly. From button placement to content flow, every element is optimized for engagement. Our UX strategy helps reduce bounce rates, increase conversions, and build long-term trust with your audience.</>,
  accordion_id: "headingNinetyEight",
  collapsed: "collapsed",
  data_bs_target: "#collapseNinetyEight",
  aria_controls: "collapseNinetyEight",
  active: "",
},
{
  id: 99,
  question: "Do you offer mobile-friendly design Dubai?",
  answer: <>Absolutely. Every DigiExpo website is built with a mobile-first approach to perform flawlessly across all devices. Since most UAE users browse on smartphones, we focus on speed, responsiveness, and visual consistency. Whether viewed on a phone, tablet, or desktop, your site will deliver the same seamless experience and drive engagement anywhere, anytime.</>,
  accordion_id: "headingNinetyNine",
  collapsed: "collapsed",
  data_bs_target: "#collapseNinetyNine",
  aria_controls: "collapseNinetyNine",
  active: "",
},
{
  id: 100,
  question: "Can you rank websites on Google UAE?",
  answer: <>Yes, we help businesses boost visibility and rankings on Google through strategic SEO and digital marketing. Our process includes on-page optimization, backlink building, and localized SEO targeting UAE audiences. At DigiExpo, we design websites that not only look great but are structured for high search performance — helping your brand attract quality traffic and achieve steady organic growth.</>,
  accordion_id: "headingHundred",
  collapsed: "collapsed",
  data_bs_target: "#collapseHundred",
  aria_controls: "collapseHundred",
  active: "",
},
{
  id: 101,
  question: "What’s trending in Dubai web design 2025?",
  answer: <>In 2025, Dubai’s web design trends emphasize minimalism, AI-driven personalization, and lightning-fast performance. There’s a growing demand for motion graphics, voice-enabled navigation, and interactive 3D visuals. DigiExpo stays ahead of the curve by blending these innovations with timeless UX principles — creating futuristic yet practical websites that delight users and strengthen brands.</>,
  accordion_id: "headingHundredOne",
  collapsed: "collapsed",
  data_bs_target: "#collapseHundredOne",
  aria_controls: "collapseHundredOne",
  active: "",
},
{
  id: 102,
  question: "Can you build custom web apps Dubai?",
  answer: <>Yes, DigiExpo specializes in developing custom web applications built around your business processes. From internal dashboards to booking systems and eCommerce solutions, our apps are fast, secure, and scalable. We combine robust front-end interfaces with powerful back-end logic to deliver high-performing web apps that deliver measurable business value.</>,
  accordion_id: "headingHundredTwo",
  collapsed: "collapsed",
  data_bs_target: "#collapseHundredTwo",
  aria_controls: "collapseHundredTwo",
  active: "",
},
{
  id: 103,
  question: "What digital marketing services do you offer?",
  answer: <>DigiExpo provides comprehensive digital marketing services, including SEO, PPC advertising, content marketing, and social media management. Every campaign is customized to align with your brand’s voice and growth goals. Our data-driven approach ensures measurable success — from increasing awareness to generating leads and driving sustainable conversions across all platforms.</>,
  accordion_id: "headingHundredThree",
  collapsed: "collapsed",
  data_bs_target: "#collapseHundredThree",
  aria_controls: "collapseHundredThree",
  active: "",
},
{
  id: 104,
  question: "How do you ensure on-time delivery?",
  answer: <>We maintain strict project schedules with clear milestones and continuous communication. Using Agile methodologies, we ensure steady progress and adaptability without sacrificing quality. Every phase — from design to testing — is strategically planned. At DigiExpo, we believe punctuality is professionalism, so we guarantee timely delivery without compromising performance or creativity.</>,
  accordion_id: "headingHundredFour",
  collapsed: "collapsed",
  data_bs_target: "#collapseHundredFour",
  aria_controls: "collapseHundredFour",
  active: "",
},
  {
    id: 105,
    question: "Can experts fix my old website fast?",
    answer: (
      <>
        Yes, at DigiExpo, we deal with the reprocessing of old websites and their replacement with the current levels. 
        Our team identifies the problem areas of performance, remodels graphics, and increases the loading speed 
        without interfering with your current content. We know that time is like money, and that is why we are 
        efficient in providing a fully refreshed mobile-friendly site within record time and can assist your business 
        to make a strong digital comeback in no time.
      </>
    ),
    accordion_id: "headingHundredFive",
    collapsed: "collapsed",
    data_bs_target: "#collapseHundredFive",
    aria_controls: "collapseHundredFive",
    active: "",
  },

  // Entity Intent
  {
    id: 106,
    question: "What services do you offer in Dubai?",
    answer: (
      <>
        DigiExpo provides a full spectrum of digital services in Dubai, which includes web design, web development, 
        eCommerce, branding, SEO, and performance marketing. DigiExpo's goal is to make businesses thrive on the internet. 
        Whether you are starting a business or growing an established one, we will offer you the full package to help 
        your brand stand out in the competitive digital market of Dubai.
      </>
    ),
    accordion_id: "headingHundredSix",
    collapsed: "collapsed",
    data_bs_target: "#collapseHundredSix",
    aria_controls: "collapseHundredSix",
    active: "",
  }
]
  return (
    <>
      <div className="tp-custom-accordion">
        <div className={`accordion ${style && "tp-inner-font"}`} id="accordionExample">
          {answer_question.map((item) => (
            <div onClick={() => setShadow(item.id)} key={item.id} 
                 className={`accordion-items ${item.show} ${shadow === item.id && "tp-faq-active"}`}>
              <h2 className="accordion-header" id={item.accordion_id}>
                <button
                  className={`accordion-buttons ${item.collapsed}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={item.data_bs_target}
                  aria-expanded={item.aria_expanded}
                  aria-controls={item.aria_controls}
                >
                  {item.question}
                  <span className="accordion-btn"></span>
                </button>
              </h2>
              <div
                id={item.aria_controls}
                className={`accordion-collapse collapse `}
                aria-labelledby={item.accordion_id}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnswerQuestion;
