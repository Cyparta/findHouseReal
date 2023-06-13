import Link from "next/link";
import { useSelector } from "react-redux";

const Form = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const register = useSelector((state) => state.lang.value.register);
  return (
    <form action="#">
      <div className="heading text-center">
        <h3>{register.heading[lang]}</h3>
        <p className="text-center">
          {register.heading[lang]}{" "}
          <Link href="/login">
            <a className="text-thm">{register.login[lang]}</a>
          </Link>
        </p>
      </div>
      {/* End .heading */}

      <div className="form-group input-group ">
        <input
          type="text"
          className="form-control"
          required
          placeholder={register.name[lang]}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group input-group  ">
        <input
          type="email"
          className="form-control"
          required
          placeholder={register.email[lang]}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fa fa-envelope-o"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group input-group  ">
        <input
          type="password"
          className="form-control"
          required
          placeholder={register.password[lang]}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group input-group  ">
        <input
          type="password"
          className="form-control"
          required
          placeholder={register.rePassword[lang]}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group form-check custom-checkbox mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          required
          id="terms"
        />
        <label className="form-check-label form-check-label" htmlFor="terms">
         {register.text[lang]}
        </label>
      </div>
      {/* End .form-group */}

      <button type="submit" className="btn btn-log w-100 btn-thm">
        {register.register[lang]}
      </button>
      {/* login button */}

      <div className="divide">
        <span className="lf_divider">{register.or[lang]}</span>
        <hr />
      </div>
      {/* devider */}

      <div className="row mt25">
        <div className="col-lg-6">
          <button
            type="submit"
            className="btn btn-block color-white bgc-fb mb0 w-100"
          >
            <i className="fa fa-facebook float-start mt5"></i> {register.facebook[lang]}
          </button>
        </div>
        {/* End .col */}

        <div className="col-lg-6">
          <button
            type="submit"
            className="btn btn-block color-white bgc-gogle mb0 w-100"
          >
            <i className="fa fa-google float-start mt5"></i> {register.google[lang]}
          </button>
        </div>
        {/* End .col */}
      </div>
      {/* more signin options */}
    </form>
  );
};

export default Form;
