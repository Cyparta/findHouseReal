import Link from "next/link";
import findProperties from "../../data/findProperties";
import { useSelector } from "react-redux";
const FindProperties = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  return (
    <>
      {findProperties.map((item) => (
        <div className={`col-lg-4 ${item.column[lang]}`} key={item.id[lang]}>
          <Link href="/">
            <a className="properti_city d-block">
              <div className="thumb">
                <img
                  className="img-fluid w100"
                  src={item.img[lang]}
                  alt="pc1.jpg"
                />
              </div>
              <div className="overlay">
                <div className="details">
                  <h4>{item.name[lang]}</h4>
                  <p>{item.number[lang]} </p>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default FindProperties;
