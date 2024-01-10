import Link from "next/link";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import properties from "../../data/properties";
import { gallerys } from "../../data/gallery";

const FeaturedProperties = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const month = { en: "EGP", ar: "جنيه" };
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

  const units = useSelector((state) => state.units.data)

  console.log(units)
  // properties?.slice(0, gallerys.length)?

  let content = units?.results?.map((item, index) => {
    return (
      <div className="item" key={item.id[lang]}>
        <div className="feat_property">
          <div className="thumb">
            <img
              className="img-whp"
              src={item.main_image}
              alt="fp1.jpg"
            />
            <div className="thmb_cntnt">
              <ul className="tag mb0">
                {item?.saleTag?.map((val, i) => (
                  <li className="list-inline-item" key={i}>
                    <a href="#">{val[lang]}</a>
                  </li>
                ))}
              </ul>
              <a className="fp_price">
                {item?.price} {month[lang]}
              </a>
            </div>
          </div>
          {/* End .thumb */}

          <div className="details">
            <div className="tc_content">
              <p className="text-thm">{item?.city}</p>
              <h4>
                <Link href={`/units-details/${item?.id}`}>
                  <a>{item?.address}</a>
                </Link>
              </h4>
              <p>
                <span className="flaticon-placeholder"></span>
                {item?.comment}
              </p>


              <ul className="prop_details mb0">
                {/* {item?.itemDetails?.map((val, i) => (
                  <li className="list-inline-item" key={i}>
                    <a href="#">
                      {val.name[lang]}: {val.number[lang]}
                    </a>
                  </li>
                ))} */}

                <li className="list-inline-item">
                  <a href="#">
                    مطبخ : {item.kitchen_count}
                  </a>
                </li>
                {/* living_room_count */}

                <li className="list-inline-item">
                  <a href="#">
                    حمام : {item.bath_count}
                  </a>
                </li>

                <li className="list-inline-item">
                  <a href="#">
                    غرف المعيشة : {item.living_room_count}
                  </a>
                </li>
              </ul>
            </div>
            {/* End .tc_content */}

            {/* <div className="fp_footer">
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
            </div> */}
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
