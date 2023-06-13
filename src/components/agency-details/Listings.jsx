import Link from "next/link";
import { useSelector } from "react-redux";
import properties from "../../data/properties";

const Listings = () => {
  const lang = useSelector(state => state.lang.value.lang)
  return (
    <>
      {properties.slice(0, 3).map((item) => (
        <div className="col-lg-12" key={item.id[lang]}>
          <div className="feat_property list style2 hvr-bxshd bdrrn mb10 mt20">
            <div className="thumb">
              <img className="img-whp" src={item.img[lang]} alt={item.img[lang]} />
              <div className="thmb_cntnt">
                <ul className="icon mb0">
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="flaticon-transfer-1"></span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="flaticon-heart"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End .thumb */}

            <div className="details">
              <div className="tc_content">
                <div className="dtls_headr">
                  <ul className="tag mb-3">
                    {item.saleTag.map((val, i) => (
                      <li className="list-inline-item" key={i}>
                        <a href="#">{val[lang]}</a>
                      </li>
                    ))}
                  </ul>

                  <Link href={`/listing-details-v1/${item.id[lang]}`}>
                    <a className="fp_price">
                      ${item.price[lang]}
                      <small>/mo</small>
                    </a>
                  </Link>
                </div>
                <p className="text-thm">{item.type[lang]}</p>
                <h4>
                  {" "}
                  <Link href={`/listing-details-v1/${item.id[lang]}`}>
                    <a>{item.title[lang]}</a>
                  </Link>
                </h4>
                <p>
                  <span className="flaticon-placeholder"></span>
                  {item.location[lang]}
                </p>

                <ul className="prop_details mb0">
                  {item.itemDetails.map((val, i) => (
                    <li className="list-inline-item" key={i}>
                      <a href="#">
                        {val.name[lang]}: {val.number[lang]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End .tc_content */}

              <div className="fp_footer">
                <ul className="fp_meta float-start mb0">
                  <li className="list-inline-item">
                    <a href="#">
                      <img src={item.posterAvatar[lang]} alt="pposter1.png" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">{item.posterName[lang]}</a>
                  </li>
                </ul>
                <div className="fp_pdate float-end">{item.postedYear[lang]}</div>
              </div>
              {/* End . fp_footer */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Listings;
