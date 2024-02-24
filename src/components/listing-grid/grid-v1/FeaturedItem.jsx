import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLength } from "../../../features/properties/propertiesSlice";
import { gallerys } from "../../../data/gallery";
import { useState } from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { GETUnits } from "../../../features/units/unitsSlice";
import { useRouter } from "next/router";
const FeaturedItem = () => {
  const {
    keyword,
    location,
    status,
    propertyType,

    bathrooms,
    bedrooms,
    garages,
    yearBuilt,
    area,
    amenities,
  } = useSelector((state) => state.properties);
  let { sort, price } = useSelector((state) => state.datetofilter);
  const { statusType, featured, isGridOrList } = useSelector(
    (state) => state.filter
  );
  let { data } = useSelector((state) => state.page);
  const lang = useSelector((state) => state.lang.value.lang);
  const dispatch = useDispatch();
  let [result, setresult] = useState(null);

  let units = useSelector((state) => state.units.data)
  let filter = useSelector((state) => state.units.filter)

  const router = useRouter()

  function submitfilter() {
    if (keyword) {
      setresult(gallerys.filter((ele) => ele.title[lang].includes(keyword)));
    }
    if (bedrooms) {
      setresult(gallerys.filter((ele) => ele.Beds[lang].includes(bedrooms)));
      console.log(result);
    }
    if (price) {
      setresult(gallerys.filter((ele) => ele.price[lang].includes(price)));
    }
    if (sort.startsWith("Highest")) {
      let myresult = result ? [...result] : data[0] ? [...data[0]] : [];
      myresult.sort(function (a, b) {
        return (
          Number(b.price[lang].split(" ")[0]) -
          Number(a.price[lang].split(" ")[0])
        );
      });
      setresult(myresult);
    }
    if (sort.startsWith("Lowest")) {
      let myresult = result ? [...result] : data[0] ? [...data[0]] : [];
      myresult.sort(function (a, b) {
        return (
          Number(a.price[lang].split(" ")[0]) -
          Number(b.price[lang].split(" ")[0])
        );
      });
      setresult(myresult);
    }
    if (keyword === "" && price === "" && bedrooms === "" && sort === "") {
      setresult(data[0]);
    }
    console.log(bedrooms, "bedrooms");
  }
  // status handler
  let price_units = {en: "EGP", ar:"جنيه"}

  // add length of filter items
  useEffect(() => {
    // dispatch(addLength(content.length));
    console.log(sort, "sort");
    submitfilter();
    dispatch(addLength(gallerys.length));
    // console.log(result);
  }, [keyword, price, bedrooms, sort, data]);

  useEffect(() => {
    dispatch(GETUnits())
  }, [filter.page, filter.search, filter.bath_count, filter.ordering, filter.room_number])

  return (
    <>
      {units?.results
        ? units?.results?.map((item) => {
            return (
              <div
                className={`${
                  isGridOrList ? "col-12 feature-list" : "col-md-6 col-lg-6"
                } `}
                key={item?.id}
              >
                <div
                  className={`feat_property home7 style4 ${
                    isGridOrList ? "d-flex align-items-center" : undefined
                  }`}
                >
                    <Link href={`/units-details/${item?.id}`} as={`/units-details/${item?.id}`}>
                  <div className="thumb cursor">
                    <img
                      className="img-whp"
                      src={item?.main_image}
                      alt="fp1.jpg"
                    />
                    <div className="thmb_cntnt">
                      {/* <ul className="tag mb0">
                        <li className="list-inline-item">
                          <a href="#">Featured</a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="text-capitalize">
                            {item?.type} 
                          </a>
                        </li>
                      </ul> */}
                      {/* <ul className="icon mb0">
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
                      </ul> */}

                        <a className="fp_price">
                          {item?.price} {" "}
                          {price_units[lang]}
                        </a>
                    </div>
                  </div>
                      </Link>
                  <div className="details">
                    <div className="tc_content">
                      {/* <p className="text-thm">{item.type[lang]}</p> */}
                      <h4>
                         <Link href={`/units-details/${item?.id}`} as={`/units-details/${item?.id}`}>
                          <a>{item?.city}</a>
                        </Link>
                      </h4>
                      <p>
                        <span className="flaticon-placeholder"></span>
                        {item?.address}
                      </p>
                      <p>
                       
                        {item?.sales_type}
                      </p>

                      <div className="details">
                        <div className="stylebedbath row">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <FaBath />
                            <p>{item?.bath_count} </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <FaBed />
                            <p>{item?.living_room}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End .tc_content */}
                    <div className="fp_footer">
                      <ul className="fp_meta float-start mb0">
                        <button className="btn btn-block btn-thm w-100" onClick={() => router.push(`/units-details/${item?.id}`)}>للحجز و الاستعلام</button>
                        <li className="list-inline-item">
                          {/* <Link href="/agent-v2"> */}
                          <a>
                            {/* <img src={item.posterAvatar} alt="pposter1.png" /> */}
                          </a>
                          {/* </Link> */}
                        </li>
                        <li className="list-inline-item">
                          {/* <Link href="/agent-v2"> */}
                          {/* <a>{item.posterName}</a> */}
                          {/* </Link> */}
                        </li>
                      </ul>
                      {/* <div className="fp_pdate float-end">{item.postedYear}</div> */}
                    </div>
                    {/* End .fp_footer */}
                  </div>
                </div>
              </div>
            );
          })
        : data[0]?.map((item) => {
            return (
              <div
                className={`${
                  isGridOrList ? "col-12 feature-list" : "col-md-6 col-lg-6"
                } `}
                key={item.id[lang]}
              >
                <div
                  className={`feat_property home7 style4 ${
                    isGridOrList ? "d-flex align-items-center" : undefined
                  }`}
                >
                  <div className="thumb">
                    <img
                      className="img-whp"
                      src={item.img[lang]}
                      alt="fp1.jpg"
                    />
                    <div className="thmb_cntnt">
                      <ul className="tag mb0">
                        <li className="list-inline-item">
                          <a href="#">Featured</a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="text-capitalize">
                            {item.type[lang]}
                          </a>
                        </li>
                      </ul>
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

                      <Link href={`/listing-details-v1/[id]`} as={`/listing-details-v1/${item.id["en"]}`}>
                        <a className="fp_price">
                          {item.price[lang]}
                          <small>{price_units[lang]}</small>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="details">
                    <div className="tc_content">
                      {/* <p className="text-thm">{item.type[lang]}</p> */}
                      <h4>
                         <Link href={`/listing-details-v1/[id]`} as={`/listing-details-v1/${item.id["en"]}`}>
                          <a>{item.title[lang]}</a>
                        </Link>
                      </h4>
                      <p>
                        <span className="flaticon-placeholder"></span>
                        {item.address[lang]}
                      </p>

                      <div className="details">
                        <div className="stylebedbath row">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <FaBath />
                            <p>{item.Beds[lang]} </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <FaBed />
                            <p>{item.bathrooms[lang]}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End .tc_content */}

                    <div className="fp_footer">
                      <ul className="fp_meta float-start mb0">
                        <li className="list-inline-item">
                          {/* <Link href="/agent-v2">
                            <a>
                              <img src={item.posterAvatar} alt="pposter1.png" />
                            </a>
                          </Link> */}
                        </li>
                        <li className="list-inline-item">
                          {/* <Link href="/agent-v2">
                            <a>{item.posterName}</a>
                          </Link> */}
                        </li>
                      </ul>
                      <div className="fp_pdate float-end">
                        {/* {item.postedYear} */}
                        testssss
                      </div>

                    </div>
                    {/* End .fp_footer */}
                  </div>
                </div>
              </div>
            );
          })}
    </>
  );
};

export default FeaturedItem;
