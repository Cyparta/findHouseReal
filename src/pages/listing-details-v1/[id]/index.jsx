import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Footer from "../../../components/common/footer/Footer";
import Header from "../../../components/common/header/DefaultHeader";
import MobileMenu from "../../../components/common/header/MobileMenu";
import PopupSignInUp from "../../../components/common/PopupSignInUp";
import { gallerys } from "../../../data/gallery";
import DetailsContent from "../../../components/listing-details-v1/DetailsContent";
import Sidebar from "../../../components/listing-details-v1/Sidebar";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import CopyrightFooter from "../../../components/common/footer/CopyrightFooter";

const Index = () => {
  const router = useRouter();
  let lang = useSelector((state) => state.lang.value.lang);
  
  const {id} = router.query;
  console.log(router)
  let [property, setProperty] = useState();

  useEffect(() => {
    setProperty(gallerys?.find((val) => val.id[lang] == id));
  }, [id]);
  console.log(id)
  return (
    <>
      <div className={lang}>
        {id}
        {/* <!-- Main Header Nav --> */}
        <Header />

        {/* <!--  Mobile Menu --> */}
        <MobileMenu />

        {/* <!-- Modal --> */}
        <PopupSignInUp />

        {/* <!-- Listing Single Property --> */}
        <section className="listing-title-area mt85">
          <div className="container">
            <Gallery>
              <div className="row mb30">
                <div className="col-lg-7 col-xl-8">
                  <div className="single_property_title mt30-767">
                    <h2>{property?.title[lang]}</h2>
                    <p>{property?.address[lang]}</p>
                  </div>
                </div>
                <div className="col-lg-5 col-xl-4">
                  <div className="single_property_social_share position-static transform-none">
                    <div className="price float-start fn-400">
                      <h2>
                        ${property?.price[lang]}
                        <small>/mo</small>
                      </h2>
                    </div>

                    {/* End activity and social sharing */}
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-sm-7 col-lg-8">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="spls_style_two mb30-520">
                        <Item
                          original={property?.img[lang]}
                          thumbnail={property?.img[lang]}
                          width={752}
                          height={450}
                        >
                          {({ ref, open }) => (
                            <div role="button" ref={ref} onClick={open}>
                              <img
                                className="img-fluid w100 cover lds-1"
                                src={property?.img[lang]}
                                alt="1.jpg"
                              />
                            </div>
                          )}
                        </Item>
                      </div>
                    </div>
                  </div>
                </div>
               
                <div className="spss style2 mt20 text-end tal-400">
                  <ul className="mb0">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="flaticon-transfer-1"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="flaticon-heart"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="flaticon-share"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="flaticon-printer"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End .row */}
            </Gallery>
          </div>
        </section>

        {/* <!-- Agent Single Grid View --> */}
        <section className="our-agent-single bgc-f7 pb30-991">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <DetailsContent property={property}/>
              </div>
              {/* End details content .col-lg-8 */}

              <div className="col-lg-4 col-xl-4">
                <Sidebar />
              </div>
              {/* End sidebar content .col-lg-4 */}
            </div>
            {/* End .row */}
          </div>
        </section>

        {/* <!-- Our Footer --> */}
        <section className="footer_one">
          <div className="container">
            <div className="row">
              <Footer />
            </div>
          </div>
        </section>

        {/* <!-- Our Footer Bottom Area --> */}
        <section className="footer_middle_area pt40 pb40">
          <div className="container">
            <CopyrightFooter />
          </div>
        </section>
      </div>
    </>
  );
};


export default dynamic(() => Promise.resolve(Index), { ssr: false });