import React, { useEffect, useState } from "react";
import Seo from "../../components/common/seo";
import MobileMenu from "../../components/common/header/MobileMenu";
import PopupSignInUp from "../../components/common/PopupSignInUp";
import Footer from "../../components/common/footer/Footer";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "../../components/common/header/DefaultHeader";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";

import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

// export async function getServerSideProps(context) {
//     const productId = context.params?.id;

//     const url = `https://dolphin-app-u2qj5.ondigitalocean.app/en/aqar/api/router/website-units/${productId}`
//     let data;
//     try {

//         const response = await axios.get(
//             url
//         );
//         data = response.data;

//     } catch (error) {
//         console.log(error)
//     }
//     return {
//         props: {
//             data: data || null,
//         },
//     };
// }

const UnitsDetails = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const router = useRouter();
  console.log(router.query.id);
  const [data, setData] = useState([]);

  console.log(data);

  const fetchDet = async () => {
    try {
      const res = await axios.get(
        `https://dolphin-app-u2qj5.ondigitalocean.app/en/aqar/api/router/website-units/${router?.query?.id}/`
      );
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(data);

  useEffect(() => {
    if (router?.query?.id !== undefined) {
      fetchDet();
    }
  }, [router?.query?.id]);
  return (
    <>
      <div className={lang}>
        <Seo pageTitle="Home-1" />
        <Header />
        <MobileMenu />
        <PopupSignInUp />

        <section className="listing-title-area mt85">
          <div className="container">
            <div className="row mb30">
              <div className="col-lg-7 col-xl-8">
                <div className="single_property_title mt30-767">
                  <p className={styles.lead_heading}>{data?.address}</p>
                  <p className={styles.lead_unit}>{data?.city}</p>
                </div>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="single_property_social_share position-static transform-none">
                  <div className="price float-start fn-400">
                    <div>
                      <p className={styles.lead_unit}>
                        غرف النوم : {data?.kitchen_count}
                      </p>
                      <p className={styles.lead_unit}>
                        مطبخ : {data?.kitchen_count}
                      </p>
                      <p className={styles.lead_unit}>{data?.complete_type}</p>
                      <p className={styles.lead_unit}>{data?.country}</p>
                      <p className={styles.lead_unit}>{data?.unit_type}</p>
                      <p className={styles.lead_unit}>{data?.state}</p>
                      <p className={styles.lead_unit}>السعر : {data?.price}</p>
                      <p className={styles.lead_unit}>{data?.comment}</p>
                      <a href="tel:{data?.phone}" className={styles.lead_unit}>
                        للتواصل : {data?.phone}
                      </a>
                    </div>
                  </div>

                  {/* End activity and social sharing */}
                </div>
              </div>
            </div>
            ;
            <div className="row">
              <div className="col-sm-7 col-lg-8">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="spls_style_two mb30-520">
                      <div>


                        <Gallery>
                          <Item
                            original={data?.main_image}
                            thumbnail={data?.main_image}
                            width="1024"
                            height="768"
                          >
                            {({ ref, open }) => (
                              <img
                                ref={ref}
                                onClick={open}
                                src={data?.main_image}
                              />
                            )}
                          </Item>
                          
                        </Gallery>
                      </div>
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
            ;
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

export default UnitsDetails;
