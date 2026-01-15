import portfolio_blog from '@/data/portfolio-blog';
import BlogCard from './blogCard';
import styles from './blogCard.module.scss'

// data
const categories = [
   "All",
   ...new Set(portfolio_blog.map((item) => item.category)),
 ];

const Portfolio = ({blogArr}) => {

    return (
        <>
            <div className={"portfolio" + styles["blog-grid-inner"] + "mb-80 mt-80"}>
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
                  <div className={"row grid" + styles["blog-grid-inner"]}>
                   {blogArr?.map((item) => {
                     // Support both legacy Sanity posts and new WordPress GraphQL posts
                     const title = item.title?.rendered ?? item.title ?? '';
                     const slug = item.currentSlug ?? item.slug ?? '';
                     const mainImage = item.mainImage || item.featuredImage || null;
                     const date = item.date || '';
                     return  <BlogCard key={slug} title={title} mainImage={mainImage} slug={slug} date={date} />
                   })}
                  </div>
               </div>
            </div>
        </>
    );
};

export default Portfolio;