import { useSelector } from "react-redux";

const Filtering = () => {
  const lang = useSelector(state => state.lang.value.lang);
  const main = useSelector(state => state.lang.value.dashboard.propeties)
  return (
    <select className="selectpicker show-tick form-select c_select">
      <option>{main.filter[lang]}</option>
      <option>{main.filter2[lang]}</option>
      <option>{main.filter3[lang]}</option>
    </select>
  );
};

export default Filtering;
