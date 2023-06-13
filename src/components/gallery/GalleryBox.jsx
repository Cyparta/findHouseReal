import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { gallerys } from "../../data/gallery.js";
import { useSelector } from "react-redux";
import Newgallery from "./Newgallery.jsx";
import { buildinghome } from "../../data/menuData.js";

const GalleryBox = ({ nameofgallery }) => {
  const lang = useSelector((state) => state.lang.value.lang);
  return (
    <>
      <Gallery>
        {nameofgallery.map((singleItem) => (
          <div className="col-sm-6 col-md-6 col-lg-4" key={singleItem.id}>
            <div className="gallery_item">
              <img
                className="img-fluid img-circle-rounded w100"
                src={singleItem.img[lang]}
                alt="fp1.jpg"
              />
              <div className="gallery_overlay">
                <div className="icon popup-img">
                  <Gallery>
                    {singleItem.imgList.map((ele, index) => {
                      return (
                        <Item
                          original={ele}
                          // originalSrcset={ele}
                          thumbnail={ele}
                          width={752}
                          height={450}
                          content={
                            <span className={lang}>
                              <img
                                src={ele}
                                alt=""
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "15px",
                                }}
                              />
                              <h2 className="colortogallery">
                                {singleItem.title[lang]}
                              </h2>
                              <p className="colortogallery">
                                {singleItem.desc[lang]}
                              </p>
                            </span>
                          }

                          // title={singleItem.title[lang]}
                        >
                          {({ ref, open }) => (
                            <span
                              className="flaticon-zoom-in"
                              style={{ color: "transparent" }}
                              role="button"
                              ref={ref}
                              onClick={open}
                            ></span>
                          )}
                        </Item>
                      );
                    })}
                  </Gallery>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Gallery>
      {/* <Newgallery /> */}
    </>
  );
};

export default GalleryBox;
