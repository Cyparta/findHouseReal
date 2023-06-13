import BlogSidebar from "../common/blog/BlogSidebar";
import Pagination from "../common/blog/Pagination";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import BreadCrumbBlog from "./BreadCrumbBlog";
import Blog from "./Blog";
import { useSelector } from "react-redux";

const index = () => {
  const lang = useSelector(state => state.lang.value.lang)
  return (
    <>
      <div className={lang}>
        {/* <!-- Main Header Nav --> */}
        <Header />

        {/* <!--  Mobile Menu --> */}
        <MobileMenu />

        {/* <!-- Modal --> */}
        <PopupSignInUp />

        {/* <!-- Main Blog Post Content --> */}
        <section className="blog_post_container bgc-f7">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <BreadCrumbBlog />
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <Blog />
                  {/* End blog item */}
                </div>
                {/* End .row */}

                <div className="row">
                  <div className="col-lg-12">
                    <div className="mbp_pagination mt20">
                      <Pagination />
                    </div>
                    {/* End .mbp_pagination */}
                  </div>
                </div>
                {/* End .row */}
              </div>
              {/* End .col */}

              <div className="col-lg-4 col-xl-4">
                <BlogSidebar />
              </div>
              {/* End Sidebar column */}
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
