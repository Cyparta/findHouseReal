import featureProContent from "../../../data/properties";
import Slider from "react-slick";
import { useSelector } from "react-redux";

const FeatureProperties = () => {
    const lang = useSelector(state => state.lang.value.lang)
    const settings = {
        dots: true,
        arrows: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
    };

    return (
        <>
            <Slider {...settings} arrows={false}>
                {featureProContent.slice(0, 10).map((item) => (
                    <div className="item" key={item.id[lang]}>
                        <div className="feat_property home7">
                            <div className="thumb">
                                <img
                                    className="img-whp"
                                    src={item.img[lang]}
                                    alt="properties identity"
                                />

                                <div className="thmb_cntnt">
                                    <ul className="tag mb0">
                                        {item.saleTag.map((val, i) => (
                                            <li
                                                className="list-inline-item"
                                                key={i}
                                            >
                                                <a href="#">{val[lang]}</a>
                                            </li>
                                        ))}
                                    </ul>
                                    <a className="fp_price" href="#">
                                        ${item.price[lang]}
                                        <small>/mo</small>
                                    </a>
                                    <h4 className="posr color-white">
                                        {item.title[lang]}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default FeatureProperties;
