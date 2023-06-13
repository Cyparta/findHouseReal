import { useSelector } from "react-redux";

const FloorPlans = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const main = useSelector(state => state.lang.value.dashboard.createList)
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="planDsecription">{main.planDescription[lang]}</label>
          <input type="text" className="form-control" id="planDsecription" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="planBedrooms">{main.planBedRoom[lang]}</label>
          <input type="text" className="form-control" id="planBedrooms" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="planBathrooms">{main.planBathRoom[lang]}</label>
          <input type="text" className="form-control" id="planBathrooms" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="planPrice">{main.planPrice[lang]}</label>
          <input type="text" className="form-control" id="planPrice" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="planPostfix">{main.planPost[lang]}</label>
          <input type="text" className="form-control" id="planPostfix" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="planSize">{main.planSize[lang]}</label>
          <input type="text" className="form-control" id="planSize" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label>{main.planImage[lang]}</label>
          <div className="avatar-upload">
            <div className="avatar-edit">
              <input
                className="btn btn-thm"
                type="file"
                id="imageUpload"
                accept=".png, .jpg, .jpeg"
              />
              <label htmlFor="imageUpload"></label>
            </div>
            <div className="avatar-preview">
              <div id="imagePreview"></div>
            </div>
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-12">
        <div className="my_profile_setting_textarea mt30-991">
          <label htmlFor="planDescription">{main.planDescription[lang]}</label>
          <textarea
            className="form-control"
            id="planDescription"
            rows="7"
          ></textarea>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start">{main.btnBack[lang]}</button>
          <button className="btn btn2 float-end">{main.btnNext[lang]}</button>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default FloorPlans;
