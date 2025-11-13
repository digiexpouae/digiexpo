// Import only the `loadAnimation` method from `lottie-web`
import { loadAnimation } from 'lottie-web/build/player/lottie_light';
import { useEffect, useRef } from 'react';

const LottieComponent = ({ animationData, width , height = '130px' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation =loadAnimation({
      container: containerRef.current,
      animationData,
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    });

    return () => {
      animation.destroy(); // Cleanup
    };
  }, [animationData]);

  return <div ref={containerRef} style={{ width, height }} />;
};

export default LottieComponent