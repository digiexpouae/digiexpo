import React from "react";
import ModalVideo from "react-modal-video";
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
