import { useSelector } from "react-redux";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import ErrorPageContent from "./ErrorPageContent";
import { useEffect } from "react";

const index = () => {
  const lang = useSelector(state => state.lang.value.lang)
  let pathSegmentsToKeep=0
  let l=window.location
  useEffect(()=>{
    console.log(l)
    l.replace(l.protocol+'//'+l.hostname+(l.port?":"+l.port:'')+l.pathname.split('/').slice(0,1+pathSegmentsToKeep).join('/')+'/?/'+l.pathname.slice(1).split("/").slice(pathSegmentsToKeep).join('/').replace(/&/g,'~and~')+(l.search?'&'+l.search.slice(1).replace(/&/g,'~and~'):"")+l.hash)
  },[l])
  return (
    <>
      <div className={lang}>
        {/* <!-- Main Header Nav --> */}
        <Header />

        {/* <!--  Mobile Menu --> */}
        <MobileMenu />

        {/* <!-- Modal --> */}
        <PopupSignInUp />

        {/* <!-- Our Error Page --> */}
        <section className="our-error bgc-f7">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 text-center">
                <ErrorPageContent />
              </div>
            </div>
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
