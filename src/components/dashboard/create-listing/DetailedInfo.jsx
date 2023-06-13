import { useSelector } from "react-redux";
import CheckBoxFilter from "../../common/CheckBoxFilter";

const DetailedInfo = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const main = useSelector(state => state.lang.value.dashboard.createList)
  return (
    <div className="row">
      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyId">{main.propertyId[lang]}</label>
          <input type="text" className="form-control" id="propertyId" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyASize">{main.areaSize[lang]}</label>
          <input type="text" className="form-control" id="propertyASize" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="sizePrefix">{main.sizePrefix[lang]}</label>
          <input type="text" className="form-control" id="sizePrefix" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="landArea">{main.landArea[lang]}</label>
          <input type="text" className="form-control" id="landArea" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="LASPostfix">{main.landArea2[lang]}</label>
          <input type="text" className="form-control" id="LASPostfix" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="bedRooms">{main.bedroom[lang]}</label>
          <input type="text" className="form-control" id="bedRooms" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="bathRooms">{main.bathrooms[lang]}</label>
          <input type="text" className="form-control" id="bathRooms" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="garages">{main.garages[lang]}</label>
          <input type="text" className="form-control" id="garages" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="garagesSize">{main.garagesSize[lang]}</label>
          <input type="text" className="form-control" id="garagesSize" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="yearBuild">{main.yearBuilt[lang]}</label>
          <input type="text" className="form-control" id="yearBuild" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="videoUrl">{main.video[lang]}</label>
          <input type="text" className="form-control" id="videoUrl" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="virtualTour">{main.virtual[lang]}</label>
          <input type="text" className="form-control" id="virtualTour" />
        </div>
      </div>

      <div className="col-xl-12">
        <h4 className="mb10">{main.amenities[lang]}</h4>
      </div>

      <CheckBoxFilter />

      <div className="col-xl-12">
        <div className="my_profile_setting_input overflow-hidden mt20">
          <button className="btn btn1 float-start">{main.btnBack[lang]}</button>
          <button className="btn btn2 float-end">{main.btnNext[lang]}</button>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default DetailedInfo;
