import { useSelector } from "react-redux";

// import PopupVideo from "../common/PopupVideo";

const OurMission = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const about = useSelector((state) => state.lang.value.aboutPage);
  const missionContent = [
    {
      id: { en: 1, ar: 1 },
      icon: { en: "flaticon-user", ar: "flaticon-user" },
      number: { en: "80,123", ar: "80,123" },
      meta: { en: "Customers to date", ar: "العملاء حتى الآن" },
    },
    {
      id: { en: 2, ar: 2 },
      icon: { en: "flaticon-home", ar: "flaticon-home" },
      number: { en: "$74 Billion", ar: "$74 بليون" },
      meta: { en: "In home sales", ar: "في مبيعات المنازل" },
    },
    {
      id: { en: 3, ar: 3 },
      icon: { en: "flaticon-transfer", ar: "flaticon-transfer" },
      number: { en: "$468 Million", ar: "$468 مليون" },
      meta: { en: "In Savings", ar: "في التوفير" },
    },
  ];
  return (
    <>
      <div className="col-lg-6 col-xl-6">
        <div className="about_content">
          <p className="large">{about.text[lang]}</p>
          {/* <p>{about.text2[lang]}</p>
          <p>{about.text3[lang]}</p> */}

          <ul className="ab_counting">
            {missionContent.map((item) => (
              <li className="list-inline-item" key={item.id[lang]}>
                <div className="about_counting">
                  <div className="icon">
                    <span className={`${item.icon[lang]}`}></span>
                  </div>
                  <div className="details">
                    <h3>{item.number[lang]}</h3>
                    <p>{item.meta[lang]}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* End .ab_counting */}
        </div>
      </div>
      <div className="col-lg-6 col-xl-6">
        {/* <APIProvider >
          <Map
            defaultCenter={{ lat: 22.54992, lng: 0 }}
            defaultZoom={3}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
          />
        </APIProvider> */}
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.873583344881!2d30.955096976199766!3d29.98306287147528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458571dc85dffcd%3A0xf97e089a5d2fb008!2sFirst%206th%20of%20October%2C%20Giza%20Governorate%203235141!5e0!3m2!1sen!2seg!4v1708529323042!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </div>
      {/* End .col */}
    </>
  );
};

export default OurMission;
