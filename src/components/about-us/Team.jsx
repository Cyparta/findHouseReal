import agentsTeam from "../../data/agents";
import Slider from "react-slick";
import Link from "next/link";
import { useSelector } from "react-redux";

const Team = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1200,
    draggable: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} arrows={true}>
        {agentsTeam.slice(0, 6).map((item) => (
          <div className="item" key={item.id[lang]}>
            <div className="team_member">
              <div className="thumb">
                <img className="img-fluid w100" src={item.img[lang]} alt="5.jpg" />
                <div className="overylay">
                  <ul className="social_icon">
                    {item.socialList.map((social, i) => (
                      <li className="list-inline-item" key={i}>
                        <a
                          href={social.liveLink[lang]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={`fa ${social.icon[lang]}`}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* End .thumb */}

              <div className="details">
                <h4>
                  {" "}
                  <Link href={`/agent-details/${item.id[lang]}`}>
                    <a>{item.name[lang]}</a>
                  </Link>
                </h4>
                <p>{item.type[lang]}</p>
              </div>
              {/* End .details */}
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Team;
