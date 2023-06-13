import { useEffect } from "react";
import { useState } from "react";
// import InputRange from "react-input-range";
import { useDispatch, useSelector } from "react-redux";
import { addPrice } from "../../features/properties/propertiesSlice";
import { addprice } from "../../features/datetofilter/datetofilterslice";

const RangeSlider = () => {
  let result = useSelector((state) => state.datetofilter);

  const [max, setmax] = useState(
    result.price ? Number(result.price) + 10000 : 20000
  );
  const [min, setmin] = useState(result.price ? result.price : 10000);

  const [price, setPrice] = useState({ value: result.price });
  const dispath = useDispatch();
  const handleOnChange = (value) => {
    let newmin = Math.min(min, value + 25);
    let newmax = Math.max(max, value - 25);
    setmin(newmin);
    setmax(newmax);
    setPrice({ value });
    dispath(addprice(price.value));
    // console.log(price, min, max, newmin, newmax);
  };

  // price add to state
  useEffect(() => {
    dispath(
      addPrice({
        min: price.value.min,
        max: price.value.max,
      })
    );
  }, [dispath, price, addPrice]);

  return (
    <div className="nft__filter-price tp-range-slider tp-range-slider-dark mb-20">
      <div className="nft__filter-price-inner d-flex align-items-center justify-content-between">
        <div className="nft__filter-price-box">
          <div className="d-flex align-items-center">
            <span>$ </span>
            <span>{min}</span>
          </div>
        </div>
        <div className="nft__filter-price-box">
          <div className="d-flex align-items-center">
            <span>$ </span>
            <span>{max}</span>
          </div>
        </div>
      </div>

      {/* <InputRange
        formatLabel={(value) => ``}
        maxValue={20000}
        minValue={10000}
        value={price.value}
        onChange={(value) => handleOnChange(value)}
      /> */}
      <input
        type="range"
        class="form-range"
        min={min}
        max={max}
        value={price.value}
        onChange={(e) => handleOnChange(e.target.value)}
      />
      <div className="d-flex align-items-center">
        <span>$ </span>
        <span>{result.price}</span>
      </div>
      <div className="slider-styled inside-slider" id="nft-slider"></div>
    </div>
  );
};

export default RangeSlider;
