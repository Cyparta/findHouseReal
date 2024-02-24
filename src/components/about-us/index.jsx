import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import Partners from "../common/Partners";
import PopupSignInUp from "../common/PopupSignInUp";
import WhyChoose from "../common/WhyChoose";
// import Testimonial from "../home-7/Testimonial";
import BreadCrumbBanner from "./BreadCrumbBanner";
import Team from "./Team";
import OurMission from "./OurMission";
import { useSelector } from "react-redux";

const index = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const aboutPage = useSelector((state) => state.lang.value.aboutPage);
  const { chooseUs, ourTeam, testi, ourPartner } = useSelector(
    (state) => state.lang.value.globalHome
  );
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

        {/* <!-- About Text Content --> */}
        <section className="about-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2 className="mt0">{aboutPage.heading[lang]}</h2>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row align-items-center">
              <OurMission />
            </div>
            {/* End .row */}

            <div className="row mt80">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2>{chooseUs.heading[lang]}</h2>
                  <p>{chooseUs.text[lang]}</p>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <WhyChoose />
            </div>
            {/* End .row */}
          </div>
        </section>

        {/* <!-- Our Partners --> */}
        <section id="our-partners" className="our-partners">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2>{ourPartner.heading[lang]}</h2>
                  <p>{ourPartner.text[lang]}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <Partners />
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
