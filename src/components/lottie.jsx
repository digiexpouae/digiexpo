// import lottie from 'lottie-web/build/player/lottie_svg.min.js';

import { useEffect, useRef } from 'react';

const LottieComponent = ({ animationData, width, height = '130px' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.lottie) {
      const animation = window.lottie.loadAnimation({
        container: containerRef.current,
        animationData,
        loop: true,
        autoplay: true,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      });

      animation.setSubframe(false); // Optional optimization

      return () => {
        animation.destroy(); // Cleanup
      };
    }
  }, [animationData]);

  return <div ref={containerRef} style={{ width, height }} />;
};

export default LottieComponent;
