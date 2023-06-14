import { useSelector } from "react-redux";
// import PopupVideo from "../common/PopupVideo";
import YouTube from "react-youtube";
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
  const handleReady = (event) => {
    // Access the YouTube player object and set its enablejsapi parameter to 1
    event.target.setPlaybackQuality("hd1080");
    event.target.setPlaybackRate(1);
    event.target.setVolume(100);
    event.target.setOption("enablejsapi", 1);
  };
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
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kIC4-24qUno?controls=0&autoplay=1&mute=1&loop=1&playlist=kIC4-24qUno"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      {/* End .col */}
    </>
  );
};

export default OurMission;
