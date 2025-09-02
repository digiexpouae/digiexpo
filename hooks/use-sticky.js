import { useEffect, useState } from "react";

const useSticky = () => {
  const [sticky, setSticky] = useState(false);
  const [isTicking, setIsTicking] = useState(false);

  const updateStickyState = () => {
    setSticky(window.scrollY > 200);
    setIsTicking(false);
  };

  const handleScroll = () => {
    if (!isTicking) {
      window.requestAnimationFrame(updateStickyState);
      setIsTicking(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, [isTicking]);

  return {
    sticky,
  };
};

export default useSticky;
