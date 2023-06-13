import { useSelector } from "react-redux";
import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import BreadCrumbBanner from "./BreadCrumbBanner";
import ComparePricing from "./ComparePricing";

const index = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const compare = useSelector((state) => state.lang.value.compare);
  return (
    <>
      <div className={lang}>
        {/* <!-- Main Header Nav --> */}
        <Header />

        {/* <!--  Mobile Menu --> */}
        <MobileMenu />

        {/* <!-- Modal --> */}
        <PopupSignInUp />

        {/* <!-- Inner Page Breadcrumb --> */}
        <BreadCrumbBanner />

        {/* <!-- Our Pricing Table --> */}
        <section className="our-pricing bgc-fa">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2>{compare.heading[lang]}</h2>
                  <p>{compare.text[lang]}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="membership_container">
                  <ul className="mc_parent_list">
                    <li className="list-inline-item">
                      <ul className="mc_child_list one">
                        <li>
                          <div className="membership_header dn"></div>
                        </li>
                        <li>{compare.li[lang]}</li>
                        <li>{compare.li2[lang]}</li>
                        <li>{compare.li3[lang]}</li>
                        <li>{compare.li4[lang]}</li>
                        <li>{compare.li5[lang]}</li>
                        <li>{compare.li6[lang]}</li>
                        <li>{compare.li7[lang]}</li>
                      </ul>
                    </li>
                    <ComparePricing />
                  </ul>
                  {/* End .mc_parent_list */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Start Call to Action --> */}
        <section className="start-partners bgc-thm pt50 pb50">
          <div className="container">
            <CallToAction />
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

export default index;
