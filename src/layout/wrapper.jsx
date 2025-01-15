import React, { useEffect } from "react";
import dynamic from "next/dynamic";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
const gsap = dynamic(() => import("gsap"), { ssr: false });
// middleware
// internal
import ScrollToTop from "@/hooks/scroll-to-top";
import { animationCreate } from "../../utils/utils";


const ScrollTrigger = dynamic(() => import("gsap/dist/ScrollTrigger"), {
  ssr: false,
});



const Wrapper = ({ children }) => {
  // useEffect(() => {
  //   // animation
  //     if (ScrollTrigger && gsap) {
  //       gsap.registerPlugin(ScrollTrigger);
  //     }
  //     animationCreate();

  // }, []);
   useEffect(() => {
     // Check if gsap and ScrollTrigger are fully loaded
     const loadGsap = async () => {
       if (typeof window !== "undefined") {
         const { default: gsapModule } = await import("gsap");
         const { default: ScrollTriggerModule } = await import(
           "gsap/dist/ScrollTrigger"
         );

         gsapModule.registerPlugin(ScrollTriggerModule);
         // Now you can safely call animationCreate or any gsap logic
        //  animationCreate();
       }
     };

     loadGsap();
   }, []);

  return (
    <>
      {children}
      {/* <ScrollToTop /> */}
    </>
  );
};

export default Wrapper;
