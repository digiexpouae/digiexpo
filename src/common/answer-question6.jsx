import React,{useState} from "react";
// import answer_question_data from "../data/answer-question-data";
const answer_question_data=[
  

{
  id: 66,
  question: "How can UI/UX boost Dubai conversions?",
  answer: <>Strong UI/UX design has a direct impact on conversions. At DigiExpo, we design interfaces that naturally lead the user to action—whether it’s a purchase, sign-up, or inquiry. Our approach focuses on clarity, consistency, and emotional connection. DigiExpo helps Dubai companies transform visitors into loyal customers with a blend of psychology and responsive design. This method boosts customer engagement and drives measurable revenue growth with every online interaction.</>,
  accordion_id: "headingSixtySix",
  collapsed: "collapsed",
  data_bs_target: "#collapseSixtySix",
  aria_controls: "collapseSixtySix",
  active: "",
},
{
  id: 67,
  question: "Why Dubai websites fail to engage users?",
  answer: <>Many Dubai websites fail to engage users because of cluttered designs, slow loading speeds, and confusing navigation. At DigiExpo, we identify these engagement issues and redesign sites with a clean layout, meaningful visuals, and intuitive navigation. We focus on aligning brand emotion with user intent so that every design element has purpose. DigiExpo’s approach keeps audiences engaged and turns passive visitors into active participants.</>,
  accordion_id: "headingSixtySeven",
  collapsed: "collapsed",
  data_bs_target: "#collapseSixtySeven",
  aria_controls: "collapseSixtySeven",
  active: "",
},
{
  id: 68,
  question: "Best way to improve UAE site navigation?",
  answer: <>DigiExpo enhances website navigation by making it simple, structured, and user-centered. We refine menus, improve labeling, and reduce unnecessary clicks on key pages. Our UX designers test navigation flows with real users to ensure they can find what they need easily. DigiExpo applies smart hierarchies and visual cues, making UAE websites seamless and intuitive to explore.</>,
  accordion_id: "headingSixtyEight",
  collapsed: "collapsed",
  data_bs_target: "#collapseSixtyEight",
  aria_controls: "collapseSixtyEight",
  active: "",
},
{
  id: 69,
  question: "How UI/UX design affects SEO in Dubai?",
  answer: <>UI/UX and SEO are deeply connected. At DigiExpo, we design interfaces that increase engagement metrics like dwell time and click-through rate—key factors in better rankings. A clear structure helps search engines crawl pages more effectively, while fast-loading and responsive designs improve satisfaction for both users and algorithms. DigiExpo ensures your Dubai website not only looks great but also performs exceptionally in Google’s evolving SEO landscape.</>,
  accordion_id: "headingSixtyNine",
  collapsed: "collapsed",
  data_bs_target: "#collapseSixtyNine",
  aria_controls: "collapseSixtyNine",
  active: "",
},
{
  id: 70,
  question: "Why mobile-friendly UI/UX matters in Dubai?",
  answer: <>DigiExpo understands that most Dubai audiences browse through smartphones. A mobile-friendly UI/UX ensures your website loads quickly, looks great, and functions flawlessly on any device. It improves engagement, reduces bounce rates, and increases conversions. Our responsive layouts automatically adapt to all screen sizes, giving Dubai brands the ability to deliver smooth and memorable digital experiences everywhere.</>,
  accordion_id: "headingSeventy",
  collapsed: "collapsed",
  data_bs_target: "#collapseSeventy",
  aria_controls: "collapseSeventy",
  active: "",
},
{
  id: 71,
  question: "Common UI/UX mistakes Dubai startups make?",
  answer: <>Many Dubai startups skip user testing, overload designs with unnecessary visuals, or neglect mobile optimization—hurting engagement and credibility. Effective UI/UX must be practical, accessible, and goal-oriented. DigiExpo helps startups avoid poor navigation, slow loading, and confusing layouts, ensuring from the start that their websites are professional, emotional, and user-focused.</>,
  accordion_id: "headingSeventyOne",
  collapsed: "collapsed",
  data_bs_target: "#collapseSeventyOne",
  aria_controls: "collapseSeventyOne",
  active: "",
},
{
  id: 72,
  question: "How do you test UX before site launch?",
  answer: <>DigiExpo performs comprehensive UX testing before any website goes live. We use usability studies, behavioral analysis, and A/B testing to observe real user interactions. Every click, scroll, and navigation path is analyzed to identify friction points early. This ensures that the final product is intuitive, engaging, and optimized for Dubai’s diverse digital audience.</>,
  accordion_id: "headingSeventyTwo",
  collapsed: "collapsed",
  data_bs_target: "#collapseSeventyTwo",
  aria_controls: "collapseSeventyTwo",
  active: "",
}
]
const AnswerQuestion6 = ({style}) => {
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

export default AnswerQuestion6;
