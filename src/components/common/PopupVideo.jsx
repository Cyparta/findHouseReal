import { useState } from "react";
// import ModalVideo from "react-modal-video";
import YouTube from "react-youtube";
const PopupVideo = () => {
  const [isOpen, setOpen] = useState(false);
  const handleReady = (event) => {
    // Access the YouTube player object and set its enablejsapi parameter to 1
    event.target.setPlaybackQuality("hd1080");
    event.target.setPlaybackRate(1);
    event.target.setVolume(100);
    event.target.setOption("enablejsapi", 1);
  };
  return (
    <>
      {isOpen && (
        <YouTube
          videoId="kIC4-24qUno"
          className="YoutubeVideo"
          opts={{
            width: 640,
            height: 840,
            playerVars: {
              autoplay: 1,
              controls: 0,
              loop: 1,
              mute: 1,
              rel: 0,
              modestbranding: 1,
              showinfo: 0,
              playlist: "kIC4-24qUno",
              enablejsapi: 1,
            },
          }}
          onReady={handleReady}
        ></YouTube>
      )}

      <div
        className="popup_video_btn popup-iframe popup-youtube color-white"
        onClick={() => setOpen(true)}
        role="button"
      >
        <i className="flaticon-play"></i>
      </div>
    </>
  );
};

export default PopupVideo;
