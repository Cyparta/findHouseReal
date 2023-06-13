import { useSelector } from "react-redux";

const CreateList = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const main = useSelector(state => state.lang.value.dashboard.createList)
  return (
    <>
      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">{main.propertyTitle[lang]}</label>
          <input type="text" className="form-control" id="propertyTitle" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-12">
        <div className="my_profile_setting_textarea">
          <label htmlFor="propertyDescription">{main.desc[lang]}</label>
          <textarea
            className="form-control"
            id="propertyDescription"
            rows="7"
          ></textarea>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>{main.type[lang]}</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="type1">{main.type1[lang]}</option>
            <option data-tokens="Type2">{main.type2[lang]}</option>
            <option data-tokens="Type3">{main.type3[lang]}</option>
            <option data-tokens="Type4">{main.type4[lang]}</option>
            <option data-tokens="Type5">{main.type5[lang]}</option>
          </select>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>{main.status[lang]}</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="Status1">{main.status1[lang]}</option>
            <option data-tokens="Status2">{main.status2[lang]}</option>
            <option data-tokens="Status3">{main.status3[lang]}</option>
            <option data-tokens="Status4">{main.status4[lang]}</option>
            <option data-tokens="Status5">{main.status5[lang]}</option>
          </select>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExamplePrice">{main.price[lang]}</label>
          <input
            type="number"
            className="form-control"
            id="formGroupExamplePrice"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleArea">{main.area[lang]}</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleArea"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>{main.rooms[lang]}</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="Status1">1</option>
            <option data-tokens="Status2">2</option>
            <option data-tokens="Status3">3</option>
            <option data-tokens="Status4">4</option>
            <option data-tokens="Status5">5</option>
            <option data-tokens="Status6">Other</option>
          </select>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start">{main.btnBack[lang]}</button>
          <button className="btn btn2 float-end">{main.btnNext[lang]}</button>
        </div>
      </div>
    </>
  );
};

export default CreateList;
