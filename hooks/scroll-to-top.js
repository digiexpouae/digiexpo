import React, { useState, useEffect, useCallback } from "react";
import useSticky from "./use-sticky";

const ScrollToTop = () => {
  const { sticky } = useSticky();
  const [showScroll, setShowScroll] = useState(false);
  const [isTicking, setIsTicking] = useState(false);

  const updateScrollState = useCallback(() => {
    const shouldShow = window.pageYOffset > 400;
    setShowScroll(prevShow => {
      if (prevShow !== shouldShow) {
        return shouldShow;
      }
      return prevShow;
    });
    setIsTicking(false);
  }, []);

  const checkScrollTop = useCallback(() => {
    if (!isTicking) {
      window.requestAnimationFrame(updateScrollState);
      setIsTicking(true);
    }
  }, [isTicking, updateScrollState]);

  const scrollTop = useCallback((e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const options = { passive: true };
    window.addEventListener('scroll', checkScrollTop, options);
    return () => {
      window.removeEventListener('scroll', checkScrollTop, options);
    };
  }, [checkScrollTop]);

  return (
    <>
      {/* <!-- Scroll-top --> */}
      <button
        onClick={scrollTop}
        className={`scroll-top scroll-to-target ${sticky ? "open" : ""}`}
        data-target="html"
      >
         <i className="far fa-angle-double-up"></i>
      </button>
       {/* <button onClick={scrollTop} className="scroll-top scroll-to-target" data-target="html">
          <i className="far fa-angle-double-up"></i>
      </button> */}
      {/* <!-- Scroll-top-end--> */}
    </>
  );
};

export default ScrollToTop;
