import { useState } from "react";
import { useSelector } from "react-redux";

const PropertyDescriptions = ({ property }) => {
  const lang = useSelector((state) => state.lang.value.lang);
  const { des } = useSelector((state) => state.lang.value.listingStyle);
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <>
      <p className="mb25">{property?.features1[lang]}</p>
      <p className="mb25">{property?.features2[lang]}</p>
      <p className="mb25">{property?.features3[lang]}</p>
      <p className="mb25">{property?.features4[lang]}</p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <p className="mt10 mb10">{property?.features5[lang]}</p>
          <p className="mt10 mb10">{property?.features6[lang]}</p>
          <p className="mt10 mb10">{property?.features7[lang]}</p>
          <p className="mt10 mb10">{property?.features8[lang]}</p>
          <p className="mt10 mb10">{property?.features9[lang]}</p>
          <p className="mt10 mb10">{property?.features10[lang]}</p>
          {/* <p className="mt10 mb10">{property?.features[lang]}</p> */}
        </div>
      </div>
      <p className="overlay_close">
        <a
          className="text-thm fz14"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={handleClick}
        >
          {des.btn[lang]} <span className="flaticon-download-1 fz12"></span>
        </a>
      </p>
    </>
  );
};

export default PropertyDescriptions;
