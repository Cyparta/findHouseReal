import { useSelector } from "react-redux";

const SearchBox = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const {search} = useSelector(state => state.lang.value.dashboard)
  return (
    <form className="form-group">
      <input
        type="text"
        className="form-control"
        id="exampleInputName1"
        placeholder={search[lang]}
      />
      <label htmlFor="exampleInputEmail">
        <span className="flaticon-magnifying-glass"></span>
      </label>
    </form>
  );
};

export default SearchBox;
