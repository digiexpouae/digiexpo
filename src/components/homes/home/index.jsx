import ScrollToTop from "@/hooks/scroll-to-top";
import Header from "@/layout/headers/header";
import React from "react";
import HeroSlider from "./hero-slider";
import ProjectArea from "./project-area";
import TestimonialArea from "./testimonial-area";
import PaymentMethodArea from "./payment-method-area";
import ServiceArea from "./service-area";
import BusinessBox from "./business-box";
import AboutArea from "./about-area";
import FunFactArea from "./fun-fact-area";
import FaqArea from "./faq-area";
import ContactArea from "./contact-area";
import BlogArea from "./blog-area";
import Brand from "../../about/brand";
import FooterFour from "@/layout/footers/footer-4";
import ContactArea2 from "./contact-area2";
import StickyIcons from "@/common/sticky-icons";
import StickyButtons from "@/common/sticky-buttons";

const HomeOne = () => {
	return (
		<>
			<Header />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main className="fix">
						<StickyIcons/>
						<StickyButtons/>
						<HeroSlider />
						<Brand />
						<ServiceArea />
						<ContactArea2 />
						<PaymentMethodArea/>
						<BusinessBox />
						<ProjectArea />
						<TestimonialArea />
						<AboutArea />
						<FunFactArea />
						<FaqArea />
						<BlogArea />
						<ContactArea />
					</main>
					<FooterFour />
					<ScrollToTop />
				</div>
			</div>
		</>
	);
};

export default HomeOne;
