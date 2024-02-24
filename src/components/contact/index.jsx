import { useSelector } from "react-redux";
import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import AddressSidebar from "./AddressSidebar";
import BreadCrumbBanner from "./BreadCrumbBanner";
import Form from "./Form";
// import MapContact from "./mapcontact";
// import MapContact from "./mapcontact";

const index = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const { sendEmail, contactUs } = useSelector(
    (state) => state.lang.value.contact
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

        {/* <!-- Our Contact --> */}
        <section className="our-contact pb0 bgc-f7">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-xl-8">
                <div className="form_grid">
                  <h4 className="mb5">{sendEmail.heading[lang]}</h4>
                  <p>{sendEmail.text[lang]}</p>
                  <Form />
                </div>
              </div>
              {/* End .col */}

              <div className="col-lg-5 col-xl-4">
                <AddressSidebar />
              </div>
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}

          {/* <div className="container-fluid p0 mt50">
            <div className="row">
              <div className="col-lg-12">
                <div className="h600" id="map-canvas">
                  <div className="gmap_canvas pe-none"> */}
          {/* End iframe */}

          {/* <img
                      className="location-finder"
                      src="assets/images/location.png"
                      alt="location"
                    />  */}
          {/* </div>
                </div>
              </div>
            </div>
          </div> */}
        </section>

        {/* <MapContact /> */}

        <section
          style={{
            maxWidth: "100%",
            height: "600px",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221066.2962106843!2d30.926643785867697!3d30.032242092841262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458571dc1c1005f%3A0x7d1a5dd6c8358d37!2sWest%20Somid%2C%20First%206th%20of%20October%2C%20Giza%20Governorate%203235141!5e0!3m2!1sen!2seg!4v1708778677223!5m2!1sen!2seg"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
