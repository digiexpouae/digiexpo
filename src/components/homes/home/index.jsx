

import React from "react";
import ScrollToTop from "@/hooks/scroll-to-top";
import Header from "@/layout/headers/header";
import HeroSlider from "./hero-slider";
import Brand from "../../about/brand";

import dynamic from "next/dynamic";

// Non-critical sections (lazy loaded)
const ProjectArea = dynamic(() => import("./project-area"));
const TestimonialArea = dynamic(() => import("./testimonial-area"));
const PaymentMethodArea = dynamic(() => import("./payment-method-area"));
const ServiceArea = dynamic(() => import("./service-area"));
const BusinessBox = dynamic(() => import("./business-box"));
const AboutArea = dynamic(() => import("./about-area"));
const FunFactArea = dynamic(() => import("./fun-fact-area"));
const FaqArea = dynamic(() => import("./faq-area"));
const ContactArea = dynamic(() => import("./contact-area"));
const BlogArea = dynamic(() => import("./blog-area"));
const ContactArea2 = dynamic(() => import("./contact-area2"));
const FooterFour = dynamic(() => import("@/layout/footers/footer-4"));
const StickyIcons = dynamic(() => import("@/common/sticky-icons"), { ssr: false });
const StickyButtons = dynamic(() => import("@/common/sticky-buttons"), { ssr: false });

const HomeOne = () => {
	return (
		<>
			<Header />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main className="fix">
						<StickyIcons />
						<StickyButtons />
						<HeroSlider />
						<Brand />
						<ServiceArea />
						<ContactArea2 />
						<PaymentMethodArea />
						<BusinessBox />
						<ProjectArea />
						{/* <TestimonialArea /> */}
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
