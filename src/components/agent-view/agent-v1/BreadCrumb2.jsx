import { useSelector } from "react-redux";
import BreadCrumb from "../../common/BreadCrumb";

const BreadCrumb2 = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const {agent1} = useSelector(state => state.lang.value.pages)
  return (
    <div className="breadcrumb_content style2 mb0-991">
      <BreadCrumb title={agent1[lang]} />
      <h2 className="breadcrumb_title">{agent1[lang]}</h2>
    </div>
  );
};

export default BreadCrumb2;
