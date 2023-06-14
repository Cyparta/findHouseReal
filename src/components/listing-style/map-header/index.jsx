import Pagination from "../../common/blog/Pagination";
import CopyrightFooter from "../../common/footer/CopyrightFooter";
import Footer from "../../common/footer/Footer";
import GlobalHeroFilter from "../../common/GlobalHeroFilter";
import Header from "../../common/header/DefaultHeader";
import FilterTopBar from "../../common/listing/FilterTopBar";
import GridListButton from "../../common/listing/GridListButton";
import ShowFilter from "../../common/listing/ShowFilter";
import SidebarListing3 from "../../common/listing/SidebarListing3";
import BreadCrumb from "./BreadCrumb2";
import FeaturedItem from "./FeaturedItem";
import GlobalFilter from "../../common/GlobalFilter";
import MobileMenu from "../../common/header/MobileMenu";
import PopupSignInUp from "../../common/PopupSignInUp";
import { useSelector } from "react-redux";

const index = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  return (
    <>
      <div className={lang}>
        {/* <!-- Main Header Nav --> */}
        <Header />

        {/* <!--  Mobile Menu --> */}
        <MobileMenu />

        {/* <!-- Modal --> */}
        <PopupSignInUp />

        {/* <!-- Map --> */}
        <section className="home-two p0 mt85 ">
          <div className="home_two_map">
            <div className="gmap_canvas pe-none">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.0834309933534!2d30.946411599999998!3d29.977032199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145856fa27605d37%3A0x766a95dd7569ad65!2z2KzYp9mF2LnYqSDZpiDYo9mD2KrZiNio2LE!5e0!3m2!1sar!2seg!4v1686656997638!5m2!1sar!2seg"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* <!-- Listing Grid View --> */}
        <section className="our-listing bgc-f7 pb30-991  ">
          <div className="container">
            <div className="row featured_row position-relative">
              <div className="col-lg-12">
                <GlobalFilter className=" " />
              </div>
            </div>
          </div>
          {/* End .container */}

          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <BreadCrumb />
              </div>
              {/* End .col */}

              <div className="col-lg-6 position-relative">
                <div className="listing_list_style mb20-xsd tal-991">
                  <GridListButton />
                </div>
                {/* End list grid */}

                <div className="dn db-991 mt30 mb0">
                  <ShowFilter />
                </div>
                {/* ENd button for mobile sidebar show  */}
              </div>
              {/* End .col filter grid list */}
            </div>
            {/* End Page Breadcrumb and Grid,List and filter Button */}

            <div className="row">
              <div className="col-lg-4 col-xl-4">
                <div className="sidebar-listing-wrapper">
                  <SidebarListing3 />
                </div>
                {/* End SidebarListing */}

                <div
                  className="offcanvas offcanvas-start offcanvas-listing-sidebar"
                  tabIndex="-1"
                  id="sidebarListing"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title">Advanced Search</h5>
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  {/* End .offcanvas-heade */}

                  <div className="offcanvas-body">
                    <SidebarListing3 />
                  </div>
                </div>
                {/* End mobile sidebar listing  */}
              </div>
              {/* End sidebar conent */}

              <div className="col-md-12 col-lg-8">
                <div className="grid_list_search_result ">
                  <div className="row align-items-center">
                    <FilterTopBar />
                  </div>
                </div>
                {/* End .row */}

                <div className="row">
                  <FeaturedItem />
                </div>
                {/* End .row */}

                <div className="row">
                  <div className="col-lg-12 mt20">
                    <div className="mbp_pagination">
                      <Pagination />
                    </div>
                  </div>
                  {/* End paginaion .col */}
                </div>
                {/* End .row */}
              </div>
              {/* End  .col */}
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

export default index;
