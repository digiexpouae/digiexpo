import portfolio_blog from '@/data/portfolio-blog';
import BlogCard from './blogCard';


// data
const categories = [
   "All",
   ...new Set(portfolio_blog.map((item) => item.category)),
 ];

const Portfolio = ({blogArr}) => {


    return (
        <>
            <div className="portfolio blog-grid-inner mb-80 mt-80">
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-lg-8">
                        <div className="tp-about__section-box text-center mb-40">
                           <h4 className="inner-section-subtitle">OVER 150K+ CLIENT</h4>
                           <h3 className="tp-section-title">Accomplish more, Together</h3>
                           <p>Softuch blog is your knowledge center for everything remote.</p>
                        </div>
                     </div>
                  </div>
                  <div className="row grid blog-grid-inner">
                   {blogArr?.map((item) => {
                     return  <BlogCard title={item.title} mainImage={item.mainImage?.asset} slug={item.currentSlug} />
                   })}
                  </div>
               </div>
            </div>
        </>
    );
};

export default Portfolio;