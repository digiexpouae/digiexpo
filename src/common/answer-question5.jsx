import React,{useState} from "react";
// import answer_question_data from "../data/answer-question-data";
const answer_question_data=[
{
  id: 73,
  question: "How to build high-performance apps in Dubai?",
  answer: <>At DigiExpo, we develop high-performance applications built on modern frameworks, scalable architecture, and clean code practices. Our teams focus on speed, usability, and data security to deliver apps that perform smoothly even under heavy usage. From UI/UX design to backend development, every element is optimized for Dubai’s tech-driven market, ensuring your app runs fast and scales effortlessly with your business growth.</>,
  accordion_id: "headingSeventyThree",
  collapsed: "collapsed",
  data_bs_target: "#collapseSeventyThree",
  aria_controls: "collapseSeventyThree",
  active: "",
},
{
  id: 74,
  question: "Why mobile apps matter for Dubai businesses?",
  answer: <>Dubai’s digital-first economy puts mobile applications at the center of customer engagement and accessibility. At DigiExpo, we create apps that foster loyalty, convenience, and measurable growth. Whether for services, product discovery, or performance tracking, mobile apps provide faster, more personalized interactions than websites. With our expertise, Dubai businesses can craft tailored experiences that strengthen customer relationships and offer a competitive advantage in today’s mobile landscape.</>,
  accordion_id: "headingSeventyFour",
  collapsed: "collapsed",
  data_bs_target: "#collapseSeventyFour",
  aria_controls: "collapseSeventyFour",
  active: "",
},
{
  id: 75,
  question: "Do you build Android and iOS apps in Dubai?",
  answer: <>Yes, DigiExpo develops both Android and iOS apps for Dubai businesses using the latest native and cross-platform technologies. We build apps with seamless functionality, beautiful interfaces, and optimized performance for local users. Whether you’re launching an eCommerce platform, on-demand service, or enterprise solution, DigiExpo ensures your application performs flawlessly across all devices and operating systems.</>,
  accordion_id: "headingSeventyFive",
  collapsed: "collapsed",
  data_bs_target: "#collapseSeventyFive",
  aria_controls: "collapseSeventyFive",
  active: "",
},
{
  id: 76,
  question: "Do you make custom apps for startups in Dubai?",
  answer: <>Yes, DigiExpo specializes in creating custom mobile applications for Dubai startups seeking efficient and affordable digital solutions. We start by understanding your business model, target audience, and goals, then design and develop an app that aligns perfectly. From MVPs to full-scale products, DigiExpo ensures your app is unique, scalable, and delivers tangible business value in Dubai’s competitive startup ecosystem.</>,
  accordion_id: "headingSeventySix",
  collapsed: "collapsed",
  data_bs_target: "#collapseSeventySix",
  aria_controls: "collapseSeventySix",
  active: "",
},
{
  id: 77,
  question: "How to maintain and update mobile apps in Dubai?",
  answer: <>Performance and security are key to app success. DigiExpo provides ongoing maintenance and support for Dubai-based mobile apps, including bug fixes, version updates, and UX enhancements. Our team monitors analytics to identify performance gaps and optimize user satisfaction. We ensure your app remains stable, secure, and compatible with new OS releases—keeping your business running smoothly and efficiently.</>,
  accordion_id: "headingSeventySeven",
  collapsed: "collapsed",
  data_bs_target: "#collapseSeventySeven",
  aria_controls: "collapseSeventySeven",
  active: "",
},
{
  id: 78,
  question: "Do you use AI in Dubai app projects?",
  answer: <>Yes, DigiExpo integrates AI into app development to make Dubai businesses smarter and more efficient. Our AI-powered apps include personalized recommendations, predictive analytics, and intelligent chatbots that enhance engagement. By leveraging behavioral insights and automation, we help Dubai brands deliver innovative, seamless, and future-proof digital experiences.</>,
  accordion_id: "headingSeventyEight",
  collapsed: "collapsed",
  data_bs_target: "#collapseSeventyEight",
  aria_controls: "collapseSeventyEight",
  active: "",
},
{
  id: 79,
  question: "How to improve mobile app UX in Dubai?",
  answer: <>At DigiExpo, we enhance mobile app UX by simplifying navigation, optimizing speed, and refining user flows. Our research focuses on Dubai’s local audience behavior to design interfaces that are intuitive, engaging, and visually consistent. We prioritize clarity, emotional connection, and interaction precision—ensuring that every tap delivers value and enhances user satisfaction.</>,
  accordion_id: "headingSeventyNine",
  collapsed: "collapsed",
  data_bs_target: "#collapseSeventyNine",
  aria_controls: "collapseSeventyNine",
  active: "",
},

]
const AnswerQuestion5 = ({style}) => {
  const [shadow , setShadow ] = useState(2) 
  
  return (
    <>
      <div className="tp-custom-accordion">
        <div className={`accordion ${style && "tp-inner-font"}`} id="accordionExample">
          {answer_question_data.map((item) => (
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
                className={`accordion-collapse collapse ${item.show ? "show" : ""}`}
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

export default AnswerQuestion5;
