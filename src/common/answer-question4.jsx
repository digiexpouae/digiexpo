import React,{useState} from "react";
// import answer_question_data from "../data/answer-question-data";
const answer_question_data=[{
  id: 80,
  question: "Who builds the best eCommerce sites in Dubai?",
  answer: <>DigiExpo is the best eCommerce development company in Dubai, building eCommerce stores that are fast, efficient, and visually appealing. We deliver a seamless shopping experience across devices by combining design intelligence, performance, and strategic functionality. Our solutions include local payment integrations and UAE-specific SEO. DigiExpo is your ideal partner if you want to scale your eCommerce business with a sustainable, long-term approach.</>,
  accordion_id: "headingEighty",
  collapsed: "collapsed",
  data_bs_target: "#collapseEighty",
  aria_controls: "collapseEighty",
  active: "",
},
{
  id: 81,
  question: "Why hire a Dubai agency for eCommerce sites?",
  answer: <>When you hire a Dubai-based agency, you work with experts who understand the region’s online shopping culture, local payment systems, and consumer behavior. DigiExpo designs conversion-driven eCommerce websites that connect emotionally and commercially with UAE shoppers. From development to maintenance, we ensure that your store runs smoothly, ranks well, and provides an exceptional buying experience for your customers.</>,
  accordion_id: "headingEightyOne",
  collapsed: "collapsed",
  data_bs_target: "#collapseEightyOne",
  aria_controls: "collapseEightyOne",
  active: "",
},
{
  id: 82,
  question: "Do you make fast eCommerce stores in Dubai?",
  answer: <>Yes, DigiExpo develops high-speed eCommerce stores tailored to Dubai’s fast-paced market. Our developers focus on performance and aesthetics to ensure seamless browsing and faster load times. In a city where every second counts, we build eCommerce stores optimized for speed—keeping customers engaged, reducing bounce rates, and driving higher conversions.</>,
  accordion_id: "headingEightyTwo",
  collapsed: "collapsed",
  data_bs_target: "#collapseEightyTwo",
  aria_controls: "collapseEightyTwo",
  active: "",
},
{
  id: 83,
  question: "Can you add UAE payment gateways?",
  answer: <>DigiExpo integrates secure UAE payment gateways such as PayTabs, Telr, and Checkout.com to ensure smooth and trustworthy transactions. We enable multiple currencies and local banking options to enhance accessibility. With secure payment processing, your Dubai customers can shop confidently—boosting trust, purchase completion rates, and overall satisfaction.</>,
  accordion_id: "headingEightyThree",
  collapsed: "collapsed",
  data_bs_target: "#collapseEightyThree",
  aria_controls: "collapseEightyThree",
  active: "",
},
{
  id: 84,
  question: "Do you create mobile-friendly eCommerce sites in Dubai?",
  answer: <>Yes, DigiExpo designs fully mobile-responsive eCommerce websites optimized for Dubai’s smartphone-driven market. We ensure flawless performance on every device, with thumb-friendly layouts, quick product loading, and secure transactions. Our mobile-first approach guarantees that your customers enjoy a convenient, beautiful shopping experience anytime, anywhere—driving more conversions on Android and iOS alike.</>,
  accordion_id: "headingEightyFour",
  collapsed: "collapsed",
  data_bs_target: "#collapseEightyFour",
  aria_controls: "collapseEightyFour",
  active: "",
},
{
  id: 85,
  question: "How do you secure Dubai eCommerce websites?",
  answer: <>At DigiExpo, eCommerce security is a top priority. We implement SSL encryption, firewalls, and malware protection to safeguard customer data and transactions. Dubai shoppers value trust and reliability, so we ensure your online store meets the highest security standards—offering a safe, worry-free experience that builds loyalty and confidence in your brand.</>,
  accordion_id: "headingEightyFive",
  collapsed: "collapsed",
  data_bs_target: "#collapseEightyFive",
  aria_controls: "collapseEightyFive",
  active: "",
},
{
  id: 86,
  question: "Can you redesign old eCommerce stores in Dubai?",
  answer: <>Yes, DigiExpo can completely revamp outdated eCommerce websites in Dubai into modern, conversion-optimized platforms. We redesign layouts, improve speed, and streamline checkout processes to maximize sales. Your new store will align with your brand identity and customer needs. DigiExpo helps transform your eCommerce site into a high-performing, trustworthy, and visually appealing sales engine.</>,
  accordion_id: "headingEightySix",
  collapsed: "collapsed",
  data_bs_target: "#collapseEightySix",
  aria_controls: "collapseEightySix",
  active: "",
},]
const AnswerQuestion4 = ({style}) => {
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

export default AnswerQuestion4;
