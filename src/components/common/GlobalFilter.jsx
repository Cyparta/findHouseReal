import Router from "next/router";
import {
  addKeyword,
  addLocation,
} from "../../features/properties/propertiesSlice";
import PricingRangeSlider from "./PricingRangeSlider";
import CheckBoxFilter from "./CheckBoxFilter";
import GlobalSelectBox from "./GlobalSelectBox";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  addName,
  addNumberroom,
  addprice,
  addsort,
} from "../../features/datetofilter/datetofilterslice";

const GlobalFilter = ({ className = "" }) => {
  let dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.value.lang);
  const main = useSelector((state) => state.lang.value.advancedSearch);
  const [sort, setsort] = useState("sortbyid");
  const [name, setname] = useState("");
  const [numberroom, setnumberroom] = useState("");
  const [price, setprice] = useState("");
  // const [sort, setsort] = useState("sortbyid");
  const refselect = useRef();
  // submit handler
  const submitHandler = () => {
    dispatch(addName(name));
    // dispatch(add)
    dispatch(addNumberroom(numberroom));
    dispatch(addprice(price));
    dispatch(addsort(sort));
    console.log(name);
    console.log(numberroom);
    console.log(price);
    console.log(sort);
    Router.push("/listing-grid-v1");
  };
  useEffect(() => {
    console.log(sort);
  }, [sort]);
  return (
    <div className={`home1-advnc-search ${className}`}>
      <ul className="h1ads_1st_list mb0 row">
        <div className="col-lg-2 col-md-6 col-sm-12">
          <li className="list-inline-item w-100">
            {/* <div className="form-group"> */}
            <input
              type="text"
              className="form-control"
              placeholder={main.input[lang]}
              onChange={(e) => setname(e.target.value)}
            />
            {/* </div> */}
          </li>
        </div>
        {/* End li */}
        <div className="col-lg-2 col-md-6 col-sm-12">
          <li className="list-inline-item w-100">
            {/* <div className="form-group"> */}
            <input
              type="text"
              className="form-control"
              placeholder={main.proprtyType[lang]}
              onChange={(e) => setnumberroom(e.target.value)}
            />
            {/* </div> */}
          </li>
        </div>
        {/* End li */}
        <div className=" col-lg-2 col-md-6 col-sm-12">
          <li className="list-inline-item  w-100">
            {/* <div className="form-group"> */}
            <input
              type="text"
              className="form-control"
              placeholder={main.prop[lang]}
              onChange={(e) => setprice(e.target.value)}
            />
            {/* </div> */}
          </li>
        </div>
        {/* End li */}
        <div className=" col-lg-2 col-md-6 col-sm-12">
          <li className="list-inline-item  w-100">
            <select
              class="form-control "
              aria-label="Default select example"
              value={sort}
              ref={refselect}
              onChange={() => {
                setsort(refselect.current.value);
              }}
            >
              <option
                value={main.option1["en"]}
                // onChange={(e) => setsort(e.target.value)}
              >
                {main.option1[lang]}
              </option>
              <option
                value={main.option2["en"]}
                // onChange={(e) => setsort(e.target.value)}
              >
                {main.option2[lang]}
              </option>
              <option
                value={main.option3["en"]}
                // onChange={(e) => setsort(e.target.value)}
              >
                {main.option3[lang]}
              </option>
            </select>
          </li>
        </div>
        {/* End li */}

        {/* End li */}
        <div className="col-lg-2 col-md-6 col-sm-12">
          <li className="list-inline-item w-100 ">
            <div className="search_option_button">
              <button
                onClick={submitHandler}
                type="submit"
                className="btn btn-thm"
              >
                {main.button[lang]}
              </button>
            </div>
          </li>
        </div>
        {/* End li */}
      </ul>
    </div>
  );
};

export default GlobalFilter;
