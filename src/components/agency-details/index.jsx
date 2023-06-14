import { useSelector } from "react-redux";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/DefaultHeader";
import MobileMenu from "../../components/common/header/MobileMenu";
import PopupSignInUp from "../../components/common/PopupSignInUp";
import BreadCrumb2 from "./BreadCrumb2";
import SidebarListings from "./SidebarListings";
import TabDetailsContent from "./TabDetailsContent";

const index = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const { box } = useSelector((state) => state.lang.value.agentDetail);
  return (
    <>
      <div className={lang}>
        {/* <!-- Main Header Nav --> */}
        <Header />

        {/* <!--  Mobile Menu --> */}
        <MobileMenu />

        {/* <!-- Modal --> */}
        <PopupSignInUp />

        {/* <!-- Agent Single Grid View --> */}
        <section className="our-agent-single bgc-f7 pb30-991 mt85 ">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="row">
                  <div className="col-lg-12">
                    <BreadCrumb2 />
                  </div>
                  {/* End .col-12 */}

                  <div className="col-lg-12">
                    <div className="feat_property list agency">
                      <div className="thumb">
                        <img
                          className="img-whp"
                          src="/assets/images/agency/2.jpg"
                          alt="11.jpg"
                        />
                        <div className="thmb_cntnt">
                          <ul className="tag mb0">
                            <li className="list-inline-item dn"></li>
                            <li className="list-inline-item">
                              <a href="#">2 Listings</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="details">
                        <div className="tc_content">
                          <h4>{box.heading[lang]}</h4>
                          <p className="text-thm">{box.text[lang]}</p>
                          <ul className="prop_details mb0">
                            <li>
                              <a href="#">{box.office[lang]}</a>
                            </li>
                            <li>
                              <a href="#">{box.mobile[lang]}</a>
                            </li>
                            <li>
                              <a href="#">{box.fax[lang]}</a>
                            </li>
                            <li>
                              <a href="#">{box.email[lang]}</a>
                            </li>
                          </ul>
                        </div>

                        <div className="fp_footer">
                          <ul className="fp_meta float-start mb0">
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-instagram"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-pinterest"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-google"></i>
                              </a>
                            </li>
                          </ul>
                          <div className="fp_pdate float-end text-thm">
                            {box.btn[lang]}
                            <i className="fa fa-angle-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End .feat_property */}

                    {/* <div className="shop_single_tab_content style2 mt30">
                      <TabDetailsContent />
                    </div> */}
                  </div>
                  {/* End .col-12 */}
                </div>
              </div>
              {/* End .col-md-12 col-lg-8 content left side */}

              <div className="col-lg-4 col-xl-4">
                <SidebarListings />
              </div>
              {/* End .col-lg-4 col-xl-4 content left side */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
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

export default index;
