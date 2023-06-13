import { useSelector } from "react-redux";

const SocialMedia = () => {
  const lang = useSelector(state => state.lang.value.lang);
  const main = useSelector(state => state.lang.value.dashboard.profile)
  return (
    <div className="row">
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleSkype">{main.skype[lang]}</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleSkype"
            placeholder="alitfn"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleWebsite">{main.website[lang]}</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleWebsite"
            placeholder="creativelayers@gmail.com"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleFaceBook">{main.facebook[lang]}</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleFaceBook"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleTwitter">{main.twiiter[lang]}</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleTwitter"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleLinkedin">{main.linkedin[lang]}</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleLinkedin"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleInstagram">{main.instagram[lang]}</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInstagram"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleGooglePlus">{main.google[lang]}</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleGooglePlus"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleYoutube">{main.youtube[lang]}</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleYoutube"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExamplePinterest">{main.pin[lang]}</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExamplePinterest"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleVimeo">{main.vimeo[lang]}</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleVimeo"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-12 text-right">
        <div className="my_profile_setting_input">
          <button className="btn btn2">{main.btnUpdated[lang]}</button>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default SocialMedia;
