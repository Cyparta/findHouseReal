import { useSelector } from "react-redux";
import BreadCrumb from "../../common/BreadCrumb";

const BreadCrumb2 = () => {
  const lang = useSelector(state => state.lang.value.lang);
  const {grid5} = useSelector(state => state.lang.value.pages)
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title={grid5[lang]} />
      <h2 className="breadcrumb_title">{grid5[lang]}</h2>
    </div>
  );
};

export default BreadCrumb2;
