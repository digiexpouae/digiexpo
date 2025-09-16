import React from "react";
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });
import 'react-modal-video/scss/modal-video.scss';

const VideoPopup = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId = "d8w5SICzzxc",
}) => {
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isVideoOpen}
        videoId={videoId}
        onClose={() => setIsVideoOpen(false)}
      />
    </>
  );
};

export default VideoPopup;
