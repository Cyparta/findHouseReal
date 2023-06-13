import { useSelector } from "react-redux";
import BreadCrumb from "../../common/BreadCrumb";

const BreadCrumb2 = () => {
  const lang = useSelector(state => state.lang.value.lang);
  const {agencies2} = useSelector(state => state.lang.value.pages)
  return (
    <div className="breadcrumb_content style2 mb0-991">
      <BreadCrumb title={agencies2[lang]} />
      <h2 className="breadcrumb_title">{agencies2[lang]}</h2>
    </div>
  );
};

export default BreadCrumb2;
