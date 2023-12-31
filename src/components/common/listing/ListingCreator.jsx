import { useSelector } from "react-redux";

const Creaator = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const translation = {
    viewmylisting: {
      en: "View My Listing",
      ar: "عرض قائمتي",
    },
  };
  return (
    <div className="media d-flex">
      <img
        className="me-3"
        src="/findHouseReal/assets/images/team/e1.png"
        alt="lc1.png"
      />
      <div className="media-body">
        <h5 className="mt-0 mb0">Samul Williams</h5>
        <p className="mb0">(123)456-7890</p>
        <p className="mb0">info@findhouse.com</p>
        <a className="text-thm" href="#">
          {translation.viewmylisting[lang]}
        </a>
      </div>
    </div>
  );
};

export default Creaator;
