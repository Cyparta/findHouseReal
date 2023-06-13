import { useSelector } from "react-redux";
import Comments from "../blog-details/Comments";
import Ratings from "../blog-details/Ratings";
import ReviewBox from "../blog-details/ReviewBox";
import AdditionalDetails from "../common/listing-details/AdditionalDetails";
import Attachments from "../common/listing-details/Attachments";
import FloorPlans from "../common/listing-details/FloorPlans";
import PropertyDescriptions from "../common/listing-details/PropertyDescriptions";
import PropertyDetails from "../common/listing-details/PropertyDetails";
import PropertyFeatures from "../common/listing-details/PropertyFeatures";
import PropertyItem from "../common/listing-details/PropertyItem";
import PropertyLocation from "../common/listing-details/PropertyLocation";
import PropertyVideo from "../common/listing-details/PropertyVideo";
import WalkScore from "../common/listing-details/WalkScore";
import WhatsNearby from "../common/listing-details/WhatsNearby";

const DetailsContent = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const main = useSelector((state) => state.lang.value.listingStyle);
  return (
    <>
      <div className="listing_single_description">
        <div className="lsd_list">
          <PropertyItem />
        </div>
        {/* End .lsd_list */}

        <h4 className="mb30">{main.des.heading[lang]}</h4>
        <PropertyDescriptions />
      </div>
      {/* End .listing_single_description */}

      <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">{main.det.heading[lang]}</h4>
          </div>
          <PropertyDetails />
        </div>
      </div>
      {/* End .additional_details */}

      <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">{main.add.heading[lang]}</h4>
          </div>
          <AdditionalDetails />
        </div>
      </div>
      {/* End .additional_details */}

      <div className="property_attachment_area">
        <h4 className="mb30">{main.propertyAtt.heading[lang]}</h4>
        <div className="iba_container style2">
          <Attachments />
        </div>
      </div>
      {/* End .property_attachment_area */}

      <div className="application_statics mt30">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb10">{main.feat.heading[lang]}</h4>
          </div>
          {/* End .col */}

          <PropertyFeatures />
        </div>
      </div>
      {/* End .feature_area */}

      <div className="application_statics mt30">
        <h4 className="mb30">
          {main.location.heading[lang]}{" "}
          <small className="float-end">{main.location.text[lang]}</small>
        </h4>
        <div className="property_video p0">
          <PropertyLocation />
        </div>
      </div>
      {/* End .location_area */}

      <div className="application_statics mt30">
        <h4 className="mb30">{main.plans.heading[lang]}</h4>
        <div className="faq_according style2">
          <FloorPlans />
        </div>
      </div>
      {/* End .floor_plane */}

      {/* <div className="shop_single_tab_content style2 mt30">
        <PropertyVideo />
      </div> */}
      {/* End property-video  */}

      <div className="walkscore_area mt30">
        <WalkScore />
      </div>
      {/* End walkscore_area */}

      <div className="whats_nearby mt30">
        <h4 className="mb10">{main.nearby[lang]}</h4>
        <WhatsNearby />
      </div>
      {/* End what's nearby area */}

      <div className="product_single_content">
        <div className="mbp_pagination_comments mt30">
          <div className="total_review">
            <h4>{main.comments.heading[lang]}</h4>
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
              {main.comments.write[lang]}
            </a>
          </div>
          {/* End .total_review */}
          <Comments />
          <div className="custom_hr"></div>

          <div className="mbp_comment_form style2">
            <h4> {main.comments.write[lang]}</h4>
            <ul className="review_star">
              <li className="list-inline-item">
                <span className="sspd_review">
                  <ul>
                    <Ratings />
                  </ul>
                </span>
              </li>
              <li className="list-inline-item pr15">
                <p>{main.comments.rating[lang]}</p>
              </li>
            </ul>
            <ReviewBox />
          </div>
        </div>
      </div>
      {/* End review and comment area area */}
    </>
  );
};

export default DetailsContent;
