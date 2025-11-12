import React,{useState} from "react";
// import answer_question_data from "../data/answer-question-data";
const answer_question_data=[{
  id: 87,
  question: "What new technologies lead Dubai in 2025?",
  answer: <>Dubai is leading the way in 2025 with AI, blockchain, IoT, and cloud-based solutions taking center stage. At DigiExpo, we apply these innovations to future-proof our clients’ businesses. These technologies improve efficiency and user experience — from AI-driven analytics to IoT-powered automation. DigiExpo helps Dubai companies stay ahead by adopting and adapting to the latest technologies, turning innovation into measurable business growth.</>,
  accordion_id: "headingEightySeven",
  collapsed: "collapsed",
  data_bs_target: "#collapseEightySeven",
  aria_controls: "collapseEightySeven",
  active: "",
},
{
  id: 88,
  question: "How is AI changing Dubai businesses now?",
  answer: <>AI is transforming Dubai businesses — from automated customer support to predictive analytics. At DigiExpo, we integrate AI to power smarter marketing campaigns, responsive websites, and data-driven decision-making. AI helps personalize user journeys, save time, and deliver better results. We help Dubai brands embrace AI to evolve from traditional models into intelligent, adaptive systems that drive performance and sustainable growth.</>,
  accordion_id: "headingEightyEight",
  collapsed: "collapsed",
  data_bs_target: "#collapseEightyEight",
  aria_controls: "collapseEightyEight",
  active: "",
},
{
  id: 89,
  question: "Why does blockchain matter for UAE companies?",
  answer: <>Blockchain provides UAE companies with transparency, security, and trust in digital transactions. DigiExpo integrates blockchain into business solutions to enhance efficiency and safeguard data. We help Dubai organizations leverage blockchain’s decentralized power to innovate, improve accountability, and strengthen online presence — ensuring safer and smarter operations in a rapidly evolving digital economy.</>,
  accordion_id: "headingEightyNine",
  collapsed: "collapsed",
  data_bs_target: "#collapseEightyNine",
  aria_controls: "collapseEightyNine",
  active: "",
},
{
  id: 90,
  question: "How do 5G and IoT grow Dubai’s smart cities?",
  answer: <>Dubai’s smart city evolution is powered by 5G and IoT technologies. At DigiExpo, we implement these systems to build connected, intelligent infrastructures for businesses and government sectors. 5G enables real-time data transfer, while IoT automates operations and increases efficiency. Together, they create the foundation for a responsive, data-driven Dubai that leads the world in innovation and smart living.</>,
  accordion_id: "headingNinety",
  collapsed: "collapsed",
  data_bs_target: "#collapseNinety",
  aria_controls: "collapseNinety",
  active: "",
},
{
  id: 91,
  question: "What’s AR/VR’s role in Dubai’s tech future?",
  answer: <>AR and VR are redefining how Dubai businesses engage customers. At DigiExpo, we integrate immersive technologies into apps, eCommerce, and web experiences. These tools make digital interactions more engaging, emotional, and memorable. We help brands harness AR and VR for storytelling, product visualization, and training — turning imagination into powerful user engagement across Dubai’s digital space.</>,
  accordion_id: "headingNinetyOne",
  collapsed: "collapsed",
  data_bs_target: "#collapseNinetyOne",
  aria_controls: "collapseNinetyOne",
  active: "",
},
{
  id: 92,
  question: "Why invest in emerging technologies in Dubai?",
  answer: <>Investing in emerging technologies future-proofs your business. At DigiExpo, we help companies use AI, blockchain, and IoT to improve efficiency, cut costs, and unlock new revenue streams. Dubai’s tech-driven ecosystem rewards early adopters, and DigiExpo ensures your business stays competitive by applying the right innovations at the right time to secure growth and sustainability.</>,
  accordion_id: "headingNinetyTwo",
  collapsed: "collapsed",
  data_bs_target: "#collapseNinetyTwo",
  aria_controls: "collapseNinetyTwo",
  active: "",
},
{
  id: 93,
  question: "What future tech will impact Dubai companies next?",
  answer: <>AI-driven automation, digital twins, and sustainable smart systems represent Dubai’s next wave of innovation. DigiExpo tracks these emerging trends to prepare our clients for what’s coming. We help integrate forward-thinking solutions that enhance customer experience, logistics, and energy management. With our strategic guidance, Dubai companies stay ready for tomorrow’s technology — today.</>,
  accordion_id: "headingNinetyThree",
  collapsed: "collapsed",
  data_bs_target: "#collapseNinetyThree",
  aria_controls: "collapseNinetyThree",
  active: "",
},
]
const AnswerQuestion = ({style}) => {
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
