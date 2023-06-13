import Link from "next/link";
import { useSelector } from "react-redux";

const Form = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const login = useSelector(state => state.lang.value.login)
  return (
    <form action="#">
      <div className="heading text-center">
        <h3>{login.heading[lang]}</h3>
        <p className="text-center">
          {login.text[lang]}{" "}
          <Link href="/register">
            <a className="text-thm">{login.signup[lang]}</a>
          </Link>
        </p>
      </div>
      {/* End .heading */}

      <div className="input-group mb-2 mr-sm-2">
        <input
          type="text"
          className="form-control"
          required
          placeholder={login.email[lang]}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>
      {/* End .input-group */}

      <div className="input-group form-group">
        <input
          type="password"
          className="form-control"
          required
          placeholder={login.password[lang]}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>
      {/* End .input-group */}

      <div className="form-group form-check custom-checkbox mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="remeberMe"
        />
        <label
          className="form-check-label form-check-label"
          htmlFor="remeberMe"
        >
          {login.remember[lang]}
        </label>

        <a className="btn-fpswd float-end" href="#">
          {login.forgotPassword[lang]}
        </a>
      </div>
      {/* End .form-group */}

      <button type="submit" className="btn btn-log w-100 btn-thm">
        {login.login[lang]}
      </button>
      {/* login button */}

      <div className="divide">
        <span className="lf_divider">{login.or[lang]}</span>
        <hr />
      </div>
      {/* devider */}

      <div className="row mt25">
        <div className="col-lg-6">
          <button
            type="submit"
            className="btn btn-block color-white bgc-fb mb0 w-100"
          >
            <i className="fa fa-facebook float-start mt5"></i> {login.facebook[lang]}
          </button>
        </div>
        {/* End .col */}

        <div className="col-lg-6">
          <button
            type="submit"
            className="btn btn2 btn-block color-white bgc-gogle mb0 w-100"
          >
            <i className="fa fa-google float-start mt5"></i> {login.gmail[lang]}
          </button>
        </div>
        {/* End .col */}
      </div>
      {/* more signin options */}
    </form>
  );
};

export default Form;
