import { useSelector } from "react-redux";

const PropertyItem = ({ property }) => {
  const lang = useSelector((state) => state.lang.value.lang);
  const translateapartment = {
    apartment: { en: "Apartment", ar: "شقة" },
  };
  return (
    <ul className="mb0">
      <li className="list-inline-item">
        <a href="#">{translateapartment.apartment[lang]}</a>
      </li>
      <li className="list-inline-item">
        <a href="#"> {property?.Beds[lang]}</a>
      </li>
      <li className="list-inline-item">
        <a href="#"> {property?.bathrooms[lang]}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Sq Ft: 5280</a>
      </li>
    </ul>
  );
};

export default PropertyItem;
