import { useSelector } from "react-redux";
import ContactWithAgent from "../../components/common/agent-view/ContactWithAgent";
import Categorie from "../../components/common/listing/Categorie";
import FeaturedListings from "../../components/common/listing/FeaturedListings";
import FeatureProperties from "../../components/common/listing/FeatureProperties";

const SidebarListings = () => {
  const lang = useSelector(state => state.lang.value.lang);
  const { featured, cate, recently, form}= useSelector(state => state.lang.value.agentDetail)
  return (
    <div className="sidebar_listing_grid1">
      <div className="sidebar_listing_list">
        <div className="sidebar_advanced_search_widget">
          <h4 className="mb25">{form.heading[lang]}</h4>
          <ContactWithAgent />
        </div>
      </div>
      {/* End filter and search area */}

      <div className="terms_condition_widget style_two-pro">
        <h4 className="title">{featured[lang]}</h4>
        <FeatureProperties />
      </div>
      {/* End Featured Properties widget */}

      <div className="terms_condition_widget">
        <h4 className="title">{cate.cate[lang]}</h4>
        <div className="widget_list">
          <ul className="list_details">
            <Categorie />
          </ul>
        </div>
      </div>
      {/* End Categories Property widget */}

      <div className="sidebar_feature_listing">
        <h4 className="title">{recently[lang]}</h4>
        <FeaturedListings />
      </div>
      {/* End Recently Viewed widget */}
    </div>
  );
};

export default SidebarListings;
