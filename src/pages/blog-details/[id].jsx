import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BreadCrumb2 from "../../components/blog-details/BreadCrumb2";
import Comments from "../../components/blog-details/Comments";
import Pagination from "../../components/blog-details/Pagination";
import Ratings from "../../components/blog-details/Ratings";
import RelatedPost from "../../components/blog-details/RelatedPost";
import ReviewBox from "../../components/blog-details/ReviewBox";
import BlogSidebar from "../../components/common/blog/BlogSidebar";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import Footer from "../../components/common/footer/Footer";
import Social from "../../components/common/footer/Social";
import Header from "../../components/common/header/DefaultHeader";
import MobileMenu from "../../components/common/header/MobileMenu";
import PopupSignInUp from "../../components/common/PopupSignInUp";
import Seo from "../../components/common/seo";
import { blogname, blogs } from "../../data/blogs";
import { useSelector } from "react-redux";

const BlogDetailsDynamic = () => {
  const router = useRouter();

  let lang = useSelector((state) => state.lang.value.lang);

  let id = router.query.id;
  let [blog, setBlogItem] = useState();

  // setBlogItem(blogs.find((item) => item.id[lang] == id));
  useEffect(() => {
    console.log(id);
    console.log(blogs.find((item) => item.id[lang] == id));
    let result = blogs.find((blog) => blog.id[lang] == id);
    setBlogItem(result);
    console.log(blog, "blog");
  }, [id]);
  const translateuse = {
    share: {
      en: "Share",
      ar: "شارك",
    },
    review: {
      en: "Write a Review",
      ar: "اكتب مراجعة",
    },
    reviewnumber: {
      en: "896 Reviews",
      ar: "896 مراجعات",
    },
    RelatedPosts: {
      en: "Related Posts",
      ar: "منشورات ذات صلة",
    },
  };
  return (
    <>
      <div className={lang}>
        <Seo pageTitle={"Blog Details"} />
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
                <BreadCrumb2 title={blog?.title[lang]} />
              </div>
            </div>
            {/* End .row */}
            {blog ? (
              <div className="row">
                <div className="col-lg-8">
                  <div className="main_blog_post_content">
                    <div className="mbp_thumb_post">
                      <div className="blog_sp_tag">
                        <a href="#">{blog.postMeta[lang]}</a>
                      </div>
                      <h3 className="blog_sp_title">{blog.title[lang]}</h3>
                      <ul className="blog_sp_post_meta">
                        <li className="list-inline-item">
                          <a href="#">
                            <img
                              src="/assets/images/property/pposter1.png"
                              alt="pposter1.png"
                            />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">Ali Tufan</a>
                        </li>
                        <li className="list-inline-item">
                          <span className="flaticon-calendar"></span>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">January 16, 2020</a>
                        </li>
                        <li className="list-inline-item">
                          <span className="flaticon-view"></span>
                        </li>
                        <li className="list-inline-item">
                          <a href="#"> 341 views</a>
                        </li>
                        <li className="list-inline-item">
                          <span className="flaticon-chat"></span>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">15</a>
                        </li>
                      </ul>
                      <div className="thumb">
                        <img
                          className="img-fluid w-100"
                          src={blog?.img[lang]}
                          alt={blog?.img[lang]}
                        />
                      </div>

                      <div className="details">
                        <h4 className="mb30">{blog.postDescriptions[lang]}</h4>
                        <p className="mb30">{blog.p1[lang]}</p>
                        <p className="mb15">{blog.p2[lang]}</p>
                        <p>{blog.p3[lang]}</p>
                        <div className="mbp_blockquote">
                          <div className="blockquote">
                            <span className="font-italic">
                              <i className="fa fa-quote-left"></i>
                            </span>
                            <br />
                            <em className="mb-0">{blogname[lang]}</em>
                          </div>
                        </div>
                        <p className="mb25">{blog.p4[lang]}</p>
                        <p className="mb25">{blog.p5[lang]}</p>
                        {/* <p className="mb25">{blog.p6[lang]}</p> */}
                      </div>
                      <ul className="blog_post_share">
                        <li>
                          <p>{translateuse.share[lang]}</p>
                        </li>
                        <Social />
                      </ul>
                      {/* End .blog_post_share */}
                    </div>
                    {/* End .mbp_thumb_post */}

                    <div className="mbp_pagination_tab">
                      <Pagination />
                    </div>
                    {/* End mbp_pagination_tab */}

                    <div className="product_single_content mb30">
                      <div className="mbp_pagination_comments">
                        <div className="total_review">
                          <h4>{translateuse.reviewnumber[lang]}</h4>
                          <ul className="review_star_list mb0 pl10">
                            <Ratings />
                          </ul>
                          <a className="tr_outoff pl10" href="#">
                            ( 4.5 out of 5 )
                          </a>
                          <a
                            className={
                              lang === "ar"
                                ? "write_review float-end fn-xsd left"
                                : "write_review float-end fn-xsd"
                            }
                            href="#"
                          >
                            {translateuse.review[lang]}
                          </a>
                        </div>
                        {/* End .total_review */}

                        <Comments />
                        <div className="custom_hr"></div>
                      </div>
                    </div>
                    {/* End .product_single_content  */}

                    <div className="bsp_reveiw_wrt">
                      <h4> {translateuse.review[lang]}</h4>

                      <ul className="review_star">
                        <li className="list-inline-item">
                          <span className="sspd_review">
                            <ul>
                              <Ratings />
                            </ul>
                          </span>
                        </li>
                        <li className="list-inline-item pr15">
                          <p></p>
                        </li>
                      </ul>
                      <ReviewBox />
                    </div>
                    {/* End .bsp_reveiw_wrt */}
                  </div>
                  {/* End .main_blog_post_content */}

                  <div className="row">
                    <div className="col-lg-12 mb20">
                      <h4>{translateuse.RelatedPosts[lang]}</h4>
                    </div>
                    <RelatedPost />
                  </div>
                </div>
                {/* End .col */}

                <div className="col-lg-4">
                  <BlogSidebar />
                </div>
                {/* End Sidebar column */}
              </div>
            ) : (
              ""
            )}

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

export default dynamic(() => Promise.resolve(BlogDetailsDynamic), {
  ssr: false,
});
