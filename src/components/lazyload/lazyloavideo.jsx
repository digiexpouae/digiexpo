// components/LazyVideo.jsx
import { useEffect, useRef } from "react";

const LazyVideo = ({ src, type = "video/mp4", width = "500px", poster }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Create <source> dynamically
            const source = document.createElement("source");
            source.src = src;
            source.type = type;
            videoEl.appendChild(source);

            // Load and play video
            videoEl.load();
            videoEl.play().catch(() => {}); // some browsers prevent autoplay

            observer.unobserve(videoEl); // stop observing after load
          }
        });
      },
      { threshold: 0.25 } // load when 25% visible
    );

    observer.observe(videoEl);

    return () => observer.disconnect();
  }, [src, type]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      width={width}
      poster={poster}
    />
  );
};

export default LazyVideo;
