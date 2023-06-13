import { useState } from "react";
import { useSelector } from "react-redux";

const ProfileInfo = () => {
    const lang = useSelector(state => state.lang.value.lang)
    const main = useSelector(state => state.lang.value.dashboard.profile)
    const [profile, setProfile] = useState(null);

    // upload profile
    const uploadProfile = (e) => {
        setProfile(e.target.files[0]);
    };

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="wrap-custom-file">
                    <input
                        type="file"
                        id="image1"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={uploadProfile}
                    />
                    <label
                        style={
                            profile !== null
                                ? {
                                      backgroundImage: `url(${URL.createObjectURL(
                                          profile
                                      )})`,
                                  }
                                : undefined
                        }
                        htmlFor="image1"
                    >
                        <span>
                            <i className="flaticon-download"></i> Upload Photo{" "}
                        </span>
                    </label>
                </div>
                <p>*minimum 260px x 260px</p>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput1">{main.userName[lang]}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput1"
                        placeholder="alitfn"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleEmail">{main.email[lang]}</label>
                    <input
                        type="email"
                        className="form-control"
                        id="formGroupExampleEmail"
                        placeholder="creativelayers@gmail.com"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput3">{main.firstName[lang]}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput3"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput4">{main.lastName[lang]}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput4"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput5">{main.position[lang]}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput5"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput6">{main.license[lang]}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput6"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput7">{main.taxNumber[lang]}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput7"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput8">{main.phone[lang]}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput8"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput9">{main.faxNumber[lang]}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput9"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput10">{main.mobile[lang]}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput10"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput11">{main.language[lang]}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput11"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput12">
                        {main.companyName[lang]}
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput12"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-xl-12">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput13">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput13"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-xl-12">
                <div className="my_profile_setting_textarea">
                    <label htmlFor="exampleFormControlTextarea1">
                        {main.about[lang]}
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="7"
                    ></textarea>
                </div>
            </div>
            {/* End .col */}

            <div className="col-xl-12 text-right">
                <div className="my_profile_setting_input">
                    <button className="btn btn1">{main.btn[lang]}</button>
                    <button className="btn btn2">{main.btnUpdated[lang]}</button>
                </div>
            </div>
            {/* End .col */}
        </div>
    );
};

export default ProfileInfo;
