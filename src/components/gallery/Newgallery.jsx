import React from "react";
// import { PhotoSwipeLightbox } from "photoswipe/dist/photoswipe-lightbox.esm";
// import "photoswipe/dist/photoswipe.css";
// import "photoswipe/dist/default-skin/default-skin.css";

const MyComponent = () => {
  const options = {
    gallery: "#gallery--with-custom-toolbar-indicator",
    children: "a",
    // pswpModule: () => import("photoswipe/dist/photoswipe.esm.js"),
  };

  const lightbox = new PhotoSwipeLightbox(options);

  lightbox.on("uiRegister", function () {
    lightbox.pswp.ui.registerElement({
      name: "zoom-level-indicator",
      order: 9,
      onInit: (el, pswp) => {
        pswp.on("zoomPanUpdate", (e) => {
          if (e.slide === pswp.currSlide) {
            el.innerText =
              "Zoom level is " +
              Math.round(pswp.currSlide.currZoomLevel * 100) +
              "%";
          }
        });
      },
    });
  });

  lightbox.init();

  return <div>// Your component content here...</div>;
};

export default MyComponent;
