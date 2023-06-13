import { useSelector } from "react-redux";

const Pagination = () => {
  let lang = useSelector((state) => state.lang.value.lang);
  const translatepost = {
    previouspost: {
      en: "Previous Post",
      ar: "المنشور السابق",
    },
    nextpost: {
      en: "Next Post",
      ar: "المنشور التالي",
    },
    housemarkets: {
      en: "Housing Markets That",
      ar: "أسواق الإسكان التي",
    },
    housemarkets2: {
      en: "Most This Decade",
      ar: "أكثر هذا العقد",
    },
  };
  return (
    <div className="row">
      <div className="col-sm-6 col-lg-6">
        <div className="pag_prev">
          <a href="#">
            <span
              className={lang === "ar" ? "flaticon-next" : "flaticon-back"}
            ></span>
          </a>
          <div className={lang === "ar" ? "detls ar" : "detls"}>
            <h5>{translatepost.previouspost[lang]}</h5>
            <p>{translatepost.housemarkets[lang]}</p>
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-lg-6">
        <div className="pag_next text-right" dir="rtl">
          <a href="#">
            <span
              className={lang === "ar" ? "flaticon-back" : "flaticon-next"}
            ></span>
          </a>
          <div className={lang === "ar" ? "ar detls" : "detls"}>
            <h5>{translatepost.nextpost[lang]}</h5>
            <p> {translatepost.housemarkets2[lang]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
