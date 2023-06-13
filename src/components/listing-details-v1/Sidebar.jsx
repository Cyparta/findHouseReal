import ContactWithAgent from "../common/agent-view/ContactWithAgent";
import Categorie from "../common/listing/Categorie";
import ListingCreator from "../common/listing/ListingCreator";
import FeaturedListings from "../common/listing/FeaturedListings";
import FeatureProperties from "../common/listing/FeatureProperties";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const translate = {
    listed: {
      en: "Listed By",
      ar: "مدرج من قبل",
    },
    FeaturedProperties: {
      en: "Featured Properties",
      ar: "العقارات المميزة",
    },
    CategoriesProperty: {
      en: "Categories Property",
      ar: "فئات الممتلكات",
    },
    RecentlyViewed: {
      en: "Recently Viewed",
      ar: "شوهد مؤخرا",
    },
  };
  return (
    <>
      <div className={lang}>
        <div className="sidebar_listing_list">
          <div className="sidebar_advanced_search_widget">
            <div className="sl_creator">
              <h4 className="mb25">{translate.listed[lang]}</h4>
              <ListingCreator />
            </div>
            {/* End .sl_creator */}
            <ContactWithAgent />
          </div>
        </div>
        {/* End .sidebar_listing_list */}

        <div className="terms_condition_widget">
          <h4 className="title">{translate.FeaturedProperties[lang]}</h4>
          <div className="sidebar_feature_property_slider">
            <FeatureProperties />
          </div>
        </div>
        {/* End .Featured Properties */}

        <div className="terms_condition_widget">
          <h4 className="title">{translate.CategoriesProperty[lang]}</h4>
          <div className="widget_list">
            <ul className="list_details">
              <Categorie />
            </ul>
          </div>
        </div>
        {/* End .Categories Property */}

        <div className="sidebar_feature_listing">
          <h4 className="title">{translate.RecentlyViewed[lang]}</h4>
          <FeaturedListings />
        </div>
        {/* End .Recently Viewed */}
      </div>
    </>
  );
};

export default Sidebar;
