import { useSelector } from "react-redux";
import BreadCrumb from "../common/BreadCrumb";

const BreadCrumbBlog = ({ title }) => {
  const lang = useSelector((state) => state.lang.value.lang);
  const { blog4 } = useSelector((state) => state.lang.value.pages);
  const translaton = {
    construction: {
      en: "Contracting",
      ar: "مقاولات",
    },
  };
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title={title} />
      <h2 className="breadcrumb_title">{title}</h2>
    </div>
  );
};

export default BreadCrumbBlog;
