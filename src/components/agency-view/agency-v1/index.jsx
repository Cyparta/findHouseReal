import SidebarListings from "../../common/agency-view/SidebarListings";
import TopFilterBar from "../../common/agent-view/TopFilterBar";
import Header from "../../common/header/DefaultHeader";
import MobileMenu from "../../common/header/MobileMenu";
import GridListButton from "../../common/listing/GridListButton";
import PopupSignInUp from "../../common/PopupSignInUp";
import BreadCrumb2 from "./BreadCrumb2";
import Agency from "./Agency";
import Pagination from "../../common/blog/Pagination";
import Footer from "../../common/footer/Footer";
import CopyrightFooter from "../../common/footer/CopyrightFooter";
import { useSelector } from "react-redux";

const index = () => {
    const lang = useSelector(state => state.lang.value.lang)
  return (
    <div className={lang}>
      <>
        {/* <!-- Main Header Nav --> */}
        <Header />

        {/* <!--  Mobile Menu --> */}
        <MobileMenu />

        {/* <!-- Modal --> */}
        <PopupSignInUp />

        {/* <!-- Listing Grid View --> */}
        <section className="our-listing bgc-f7 pb30-991 mt85  ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <BreadCrumb2 />
              </div>
              {/* End .col */}

              <div className="col-lg-6 position-relative">
                <div className="listing_list_style tal-991">
                  <GridListButton />
                </div>
                {/* End list grid */}
              </div>
              {/* End .col filter grid list */}
            </div>
            {/* End .row */}

            <div className="row">
              <div className="col-lg-4 col-xl-4">
                <SidebarListings />
              </div>
              {/* End sidevar .col */}

              <div className="col-md-12 col-lg-8">
                <div className="row">
                  <TopFilterBar />
                </div>
                {/* End .row */}

                <div className="row">
                  <Agency />
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
              {/* End content .col */}
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
      </>
    </div>
  );
};

export default index;
