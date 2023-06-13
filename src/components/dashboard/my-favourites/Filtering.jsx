import { useSelector } from "react-redux";

const Filtering = () => {
  const {filter, filter2, filter3} = useSelector(state => state.lang.value.dashboard.propeties)
  const lang = useSelector(state => state.lang.value.lang)
  return (
    <select className="selectpicker show-tick form-select c_select">
      <option>{filter[lang]}</option>
      <option>{filter2[lang]}</option>
      <option>{filter3[lang]}</option>
    </select>
  );
};

export default Filtering;
