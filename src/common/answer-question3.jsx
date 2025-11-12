import React,{useState} from "react";
const answer_question_data=[{
  id: 59,
  question: "How to fix a slow website development Dubai?",
  answer: <>DigiExpo specializes in diagnosing and repairing slow websites. Our developers examine the backend performance, image optimization, and code efficiency to determine the bottlenecks. We then optimize your site to be loaded faster and more stably. User retention and SEO ranking in the Dubai market directly depend on speed; therefore, we help your site run well, leaving users with a pleasant experience of a high-performing and smooth website.</>,
  accordion_id: "headingFiftyNine",
  collapsed: "collapsed",
  data_bs_target: "#collapseFiftyNine",
  aria_controls: "collapseFiftyNine",
  active: "",
},
{
  id: 60,
  question: "Why is my Dubai site not getting traffic?",
  answer: <>If your Dubai site is failing to draw traffic, it is probably because of the low level of SEO, slow loading, or insufficient content strategy. We do a full audit at DigiExpo in order to find the visibility barriers and rectify them within a short time. We streamline site composition, content, and backlinks to conform to updated Google algorithms. Our tested SEO marketing techniques will assist Dubai brands to expand on organic coverage and attract specific visitors to the site.</>,
  accordion_id: "headingSixty",
  collapsed: "collapsed",
  data_bs_target: "#collapseSixty",
  aria_controls: "collapseSixty",
  active: "",
},
{
  id: 61,
  question: "Can you rebuild old Dubai business websites?",
  answer: <>Yes, DigiExpo rebuilds old Dubai business websites with a new design, fast, and with functionality. We keep your brand vision and make the platform look new and future-oriented. Everything is updated, including layout and the code standard, to the present market expectations of Dubai. Through DigiExpo, your out-of-date site is transformed into an asset that will run fast and convey the sense of innovation and authority.</>,
  accordion_id: "headingSixtyOne",
  collapsed: "collapsed",
  data_bs_target: "#collapseSixtyOne",
  aria_controls: "collapseSixtyOne",
  active: "",
},
{
  id: 62,
  question: "How to make Dubai site mobile-friendly fast?",
  answer: <>DigiExpo is fast to convert non-responsive sites into mobile-friendly ones. Our expert team optimizes designs, buttons, and content for each screen size without losing visual quality and also applies dynamic structures and testing systems to make sure that your Dubai site has a smooth operation on all devices. DigiExpo can help your business attract more customers and enhance engagement on mobile platforms.</>,
  accordion_id: "headingSixtyTwo",
  collapsed: "collapsed",
  data_bs_target: "#collapseSixtyTwo",
  aria_controls: "collapseSixtyTwo",
  active: "",
},
{
  id: 63,
  question: "Why my site ranks low on Google UAE?",
  answer: <>Low ranks occur when you do not optimize for SEO very well, perform poorly, or cannot align good content. DigiExpo tackles all these issues with thorough audits and data-driven improvements. We focus on the most powerful keywords for the UAE market, boost website speed, and increase its authority with high-quality backlinks. With the SEO strategy provided by DigiExpo, your website will get increased visibility, higher rankings, and more organic traffic.</>,
  accordion_id: "headingSixtyThree",
  collapsed: "collapsed",
  data_bs_target: "#collapseSixtyThree",
  aria_controls: "collapseSixtyThree",
  active: "",
},
{
  id: 64,
  question: "How to reduce website bounce rate Dubai?",
  answer: <>DigiExpo aims to enhance user experience and content relevance to reduce the bounce rate. We examine the actions of visitors, optimize the route of navigation, and enhance the aspects of design so that the continuity of the users is maintained. The interaction process will be enhanced by increasing the loading time and creating clear CTAs. DigiExpo transforms sites into easy-to-use and conversion-driven types of websites that users would love browsing.</>,
  accordion_id: "headingSixtyFour",
  collapsed: "collapsed",
  data_bs_target: "#collapseSixtyFour",
  aria_controls: "collapseSixtyFour",
  active: "",
},
{
  id: 65,
  question: "How to improve Dubai website user experience?",
  answer: <>At DigiExpo, we enhance website user experience (UX) design by combining data-driven user behavior with creative design. We study the user’s behavior to find the point of friction and rebuild navigation, and make it simple and clear. We ensure that the images, content, and speed are all optimized to provide an uninterrupted surfing experience.</>,
  accordion_id: "headingSixtyFive",
  collapsed: "collapsed",
  data_bs_target: "#collapseSixtyFive",
  aria_controls: "collapseSixtyFive",
  active: "",
},
]
const AnswerQuestion3 = ({style}) => {
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

export default AnswerQuestion3;
