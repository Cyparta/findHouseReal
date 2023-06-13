import { useSelector } from "react-redux";
import Pagination from "../../common/blog/Pagination";
import Header from "../../common/header/DefaultHeader";
import MobileMenu from "../../common/header/MobileMenu";
import FilteringItem2 from "../../common/listing/FilteringItem2";
import FilterTopBar2 from "../../common/listing/FilterTopBar2";
import GridListButton from "../../common/listing/GridListButton";
import SearchBoxFilter from "../../common/listing/SearchBoxFilter";
import ShowFilter from "../../common/listing/ShowFilter";
import SidebarListing2 from "../../common/listing/SidebarListing2";
import PopupSignInUp from "../../common/PopupSignInUp";
import FeaturedItem from "./FeaturedItem";

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

        {/* <!-- Listing Grid View --> */}
        <section
          id="feature-property"
          className="our-listing bgc-f7 pt0 pb0  mt85 md-mt0"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="sidebar_switch mobile_style dn db-991 mt30 mb0">
                  <ShowFilter />
                </div>
                {/* sidebar switch */}

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
                    <SidebarListing2 />
                  </div>
                </div>
                {/* End mobile sidebar listing  */}
              </div>
              {/* End .col */}

              <div className="col-xl-4 p0">
                <div className="home_two_map style2 half_map_area">
                  <div className="gmap_canvas pe-none  map-canvas half_style">
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
              </div>
              {/* End .col */}

              <div className="col-xl-8">
                <div className="half_map_area_content">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="h1ads_1st_list half_style mt30 mb30 dn-991 map-half-style position-relative">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <div className="navbered w-100">
                              <div className="mega-dropdown home2">
                                <span
                                  id="show_advbtn"
                                  className="dropbtn"
                                  data-bs-toggle="dropdown"
                                  data-bs-auto-close="outside"
                                  aria-expanded="false"
                                >
                                  Advanced Filter
                                  <i className="flaticon-more pl10 flr-520"></i>
                                </span>

                                <div className="dropdown-content dropdown-menu ">
                                  <div className="row p15">
                                    <div className="col-lg-12">
                                      <h4 className="text-thm3 mb-4">
                                        Amenities
                                      </h4>
                                    </div>
                                    <FilteringItem2 />
                                  </div>
                                  {/* End .row */}
                                </div>
                                {/* End .dropdown-menu */}
                              </div>
                            </div>
                            {/* End .advance filter button */}
                          </div>
                          {/* End .col */}

                          <div className="col-md-8">
                            <SearchBoxFilter />
                          </div>
                          {/* End .col */}

                          <div className="col-md-2">
                            <div className="listing_list_style listing-map-style m0">
                              <GridListButton />
                            </div>
                          </div>
                          {/* End .col */}
                        </div>
                        {/* End .row */}
                      </div>
                    </div>
                  </div>
                  {/* End .row */}

                  <div className="col-md-12">
                    <div className="grid_list_search_result ">
                      <div className="row align-items-center">
                        <FilterTopBar2 />
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
                  {/* End  page conent */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
