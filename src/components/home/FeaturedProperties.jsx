import Link from "next/link";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import properties from "../../data/properties";
import { gallerys } from "../../data/gallery";

const FeaturedProperties = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const month = { en: "/mo", ar: "/شهر" };
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let content = properties?.slice(0, gallerys.length)?.map((item, index) => {
    return (
      <div className="item" key={item.id[lang]}>
        <div className="feat_property">
          <div className="thumb">
            <img
              className="img-whp"
              src={gallerys[index]?.img[lang]}
              alt="fp1.jpg"
            />
            <div className="thmb_cntnt">
              <ul className="tag mb0">
                {item.saleTag.map((val, i) => (
                  <li className="list-inline-item" key={i}>
                    <a href="#">{val[lang]}</a>
                  </li>
                ))}
              </ul>
              {/* End .tag */}

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
              {/* End .icon */}

              <Link href={`/listing-details-v1/${gallerys[index]?.id[lang]}`}>
                <a className="fp_price">
                  ${gallerys[index]?.price[lang]}
                  <small>{month[lang]}</small>
                </a>
              </Link>
            </div>
          </div>
          {/* End .thumb */}

          <div className="details">
            <div className="tc_content">
              <p className="text-thm">{gallerys[index]?.type[lang]}</p>
              <h4>
                <Link href={`/listing-details-v1/${gallerys[index]?.id[lang]}`}>
                  <a>{gallerys[index]?.title[lang]}</a>
                </Link>
              </h4>
              <p>
                <span className="flaticon-placeholder"></span>
                {gallerys[index]?.address[lang]}
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
                  <Link href="/agent-v2">
                    <a>
                      <img src={item.posterAvatar[lang]} alt="pposter1.png" />
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/agent-v2">
                    <a>{item.posterName[lang]}</a>
                  </Link>
                </li>
              </ul>
              <div className="fp_pdate float-end">{item.postedYear[lang]}</div>
            </div>
            {/* End .fp_footer */}
          </div>
          {/* End .details */}
        </div>
      </div>
    );
  });

  return (
    <>
      <Slider {...settings} arrows={false}>
        {content}
      </Slider>
    </>
  );
};

export default FeaturedProperties;
