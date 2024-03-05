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
        src="/assets/images/team/e1.png"
        alt="lc1.png"
      />
      <div className="media-body">
        <h5 className="mt-0 mb0">Samul Williams</h5>
        <a className="mb0" href="tel:(123)456-7890">(123)456-7890</a>
        <a className="mb0" href="mailto:info@findhouse.com">info@findhouse.com</a>
        <a className="text-thm" href="#">
          {translation.viewmylisting[lang]}
        </a>
      </div>
    </div>
  );
};

export default Creaator;
