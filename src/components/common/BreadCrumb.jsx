import Link from "next/link";
import { useSelector } from "react-redux";

const BreadCrumb = ({ title = "" }) => {
  const lang = useSelector((state) => state.lang.value.lang);
  const pages = useSelector((state) => state.lang.value.pages);
  return (
    <>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">{pages.home[lang]}</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {title}
        </li>
      </ol>
    </>
  );
};

export default BreadCrumb;
