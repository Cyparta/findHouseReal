import { useSelector } from "react-redux";

const ChangePassword = () => {
  const lang = useSelector(state => state.lang.value.lang);
  const main = useSelector(state => state.lang.value.dashboard.profile)
  return (
    <>
      <div className="row">
        <div className="col-xl-6">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="formGroupExampleOldPass">{main.oldPass[lang]}</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleOldPass"
              placeholder="alitfn"
            />
          </div>
        </div>
      </div>
      {/* End .row */}

      <div className="row">
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="formGroupExampleNewPass">{main.newPass[lang]}</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleNewPass"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="formGroupExampleConfPass">
              {main.confirm[lang]}
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleConfPass"
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-xl-12">
          <div className="my_profile_setting_input float-start fn-520">
            <button className="btn btn3 btn-dark">{main.btnUpdated[lang]}</button>
          </div>
          <div className="my_profile_setting_input float-end fn-520">
            <button className="btn btn2">{main.btnUpdated[lang]}</button>
          </div>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default ChangePassword;
