import { useSelector } from "react-redux";
import comparePricingContent from "../../data/comparePricing";

const ComparePricing = () => {
  const lang = useSelector(state => state.lang.value.lang)
  return (
    <>
      {comparePricingContent.map((item) => (
        <li className="list-inline-item" key={item.id[lang]}>
          <ul className="mc_child_list two text-center">
            <li>
              <div className="membership_header">
                <div className="thumb">
                  <a href="#">
                    <span className="flaticon-close"></span>
                  </a>
                  <img className="img-fluid w100" src={item.img[lang]} alt="1.jpg" />
                  <div className="price">
                    ${item.price[lang]}
                    <span className="mnth">/mo</span>
                  </div>
                </div>
                <div className="details">
                  <h4>{item.propertyName[lang]}</h4>
                  <p>{item.propertyType[lang]}</p>
                </div>
              </div>
            </li>
            <li>
              <a href="#">{item.city[lang]}</a>
            </li>
            <li>
              <a href="#">{item.beds[lang]}</a>
            </li>
            <li>
              <a href="#">{item.rooms[lang]}</a>
            </li>
            <li>
              <a href="#">{item.garage[lang]}</a>
            </li>
            <li>
              <a href="#">{item.buildYear[lang]}</a>
            </li>
            <li>
              <a href="#">{item.laundryRoom[lang]}</a>
            </li>
            <li>
              <a className="btn pricing_btn" href="#">
                {item.status[lang]}
              </a>
            </li>
          </ul>
        </li>
      ))}
    </>
  );
};

export default ComparePricing;
