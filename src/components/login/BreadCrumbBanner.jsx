import BreadCrumb from "../common/BreadCrumb";
import { useSelector } from "react-redux";
const BreadCrumbBanner = () => {
  const lang = useSelector(state => state.lang.value.lang);
  const {logIn} = useSelector(state => state.lang.value.pages)
  return (
    <section className="inner_page_breadcrumb">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="breadcrumb_content">
              <BreadCrumb title={logIn[lang]} />
              <h4 className="breadcrumb_title">{logIn[lang]}</h4>
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbBanner;
