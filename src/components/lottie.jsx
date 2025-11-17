import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

const AnimatedIcon = ({ animationData, width }) => {
  const containerRef = useRef(null);
  const [animationpath, setAnimationpath] = useState(null);

  useEffect(() => {
    const loadAnimationData = async () => {
      try {
        // Load .lottie file (or any custom extension like .lottie)
        const response = await fetch(animationData);  // Fetching the file
        const data = await response.json();           // Parse as JSON
        setAnimationpath(data);                       // Store the data
      } catch (error) {
        console.error('Error loading Lottie animation:', error);
      }
    };

    loadAnimationData();
  }, [animationpath]);

  useEffect(() => {
    if (containerRef.current && animationData) {
      // Initialize Lottie animation with the loaded JSON data
      const animationInstance = lottie.loadAnimation({
        container: containerRef.current,  // The DOM element to render the animation
        animationData,                    // Direct JSON data for animation
        renderer: 'svg',                   // Render using SVG
        loop: true,                        // Loop the animation
        autoplay: true,                    // Autoplay the animation
        speed: 1,                          // Normal speed
      });

      // Cleanup function to destroy animation on unmount
      return () => {
        animationInstance.destroy();
      };
    }
  }, [animationData]); // Only trigger if animationData changes

  return (
    <div
      ref={containerRef}  // Attach the ref to the div where the animation will render
      style={{ width, height:'130px' }}  // Set dynamic width and height
    />
  );
};

export default AnimatedIcon;
