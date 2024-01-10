import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeatured,
  addStatusType,
} from "../../../features/filter/filterSlice";
import {
  addAmenities,
  addAreaMax,
  addAreaMin,
  addBathrooms,
  addBedrooms,
  addGarages,
  addKeyword,
  addLocation,
  addPrice,
  addPropertyType,
  addStatus,
  addYearBuilt,
  resetAmenities,
} from "../../../features/properties/propertiesSlice";
import PricingRangeSlider from "../../common/PricingRangeSlider";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { clearAll, updateFilter } from "../../../features/units/unitsSlice";

const FilteringItem = () => {
  const {
    keyword,
    location,
    status,
    propertyType,
    bathrooms,
    bedrooms,
    garages,
    yearBuilt,
    area,
    amenities,
  } = useSelector((state) => state.properties);
  const lang = useSelector((state) => state.lang.value.lang);
  const main = useSelector((state) => state.lang.value.globalListingGrid);
  let result = useSelector((state) => state.datetofilter);
  // useEffect(() => {
  //   console.log(result);
  // }, [result]);
  // input state
  const [getKeyword, setKeyword] = useState(
    result.name ? result.name : keyword
  );
  const [getLocation, setLocation] = useState(location);
  const [getStatus, setStatus] = useState(status);
  const [getPropertiesType, setPropertiesType] = useState(propertyType);
  const [getBathroom, setBathroom] = useState(bathrooms);
  const [getBedroom, setBedroom] = useState(
    result.numberroom ? result.numberroom : bedrooms
  );
  const [getGarages, setGarages] = useState(garages);
  const [getBuiltYear, setBuiltYear] = useState(yearBuilt);
  const [getAreaMin, setAreaMin] = useState(area.min);
  const [getAreaMax, setAreaMax] = useState(area.max);


  const dispatch = useDispatch();

  const Router = useRouter();

  const clearHandler = () => {
    dispatch(clearAll())
  }

  
  const {filter} = useSelector((state) => state.units)
  console.log(filter)
  return (
    <ul className="sasw_list mb0">
      <li className="search_area">
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder={main.keyword[lang]}
            value={filter.search}
            onChange={(e) => dispatch(updateFilter({name:'search', val: e.target.value}))}
          />
          <label>
            <span className="flaticon-magnifying-glass"></span>
          </label>
        </div>
      </li>

      {/* End li */}
      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => dispatch(updateFilter({name:'bath_count', val: e.target.value}))}
              className="selectpicker w100 show-tick form-select"
              value={filter.bath_count}
            >
              <option value="">{main.bathroom[lang]}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => dispatch(updateFilter({name:'room_number', val: e.target.value}))}
              className="selectpicker w100 show-tick form-select"
              value={filter.room_number}
            >
              <option value="">{main.bedroom[lang]}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
      </li>


      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => dispatch(updateFilter({name:'ordering', val: e.target.value}))}
              className="selectpicker w100 show-tick form-select"
              value={filter.price}
            >
              <option value="-price">الاعلي سعر الي الاقل سعر</option>
              <option value="price">الاقل سعر الي الاعلي سعر</option>
            </select>
          </div>
        </div>
      </li>
      
      <li>
        <div className="search_option_button">
          <button
            onClick={clearHandler}
            type="button"
            className="btn btn-block btn-thm w-100"
          >
            {main.clearBtn[lang]}
          </button>
        </div>
      </li>
      {/* End li */}
    </ul>
  );
};

export default FilteringItem;
