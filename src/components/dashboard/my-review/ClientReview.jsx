import Link from "next/link";
import { useSelector } from "react-redux";

const ClientReview = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const main = useSelector(state => state.lang.value.dashboard.reviews)
  const reviewContent = [
    {
      id: 1,
      img: "/assets/images/resource/review2.png",
      ratings: (
        <>
          {" "}
          <ul>
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-star"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-star"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-star"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-star"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-star"></i>
              </a>
            </li>
          </ul>
        </>
      ),
      reviewOn: {en: "Villa called Archangel", ar: "فيلا تسمى رئيس الملائكة"},
      text: {en: `Beautiful home, very picturesque and close to everything in jtree! A
      little warm for a hot weekend, but would love to come back during
      the cooler seasons! Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Accusantium voluptates eum, velit recusandae,
      ducimus earum aperiam commodi error officia optio aut et quae nam
      nostrum!`, ar: `منزل جميل ، خلاب للغاية وقريب من كل شيء في جي تيري! أ
      دافئ قليلاً لقضاء عطلة نهاية أسبوع حارة ، لكني أحب أن أعود خلال`},
    },
    {
      id: 2,
      img: "/assets/images/resource/review3.png",
      ratings: (
        <>
          {" "}
          <ul>
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-star"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-star"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-star"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-star"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-star"></i>
              </a>
            </li>
          </ul>
        </>
      ),
      reviewOn: {en: "Sunset Studio", ar:"استوديو الغروب"},
      text: {en: `Beautiful home, very picturesque and close to everything in jtree! A
      little warm for a hot weekend, but would love to come back during
      the cooler seasons! Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Accusantium voluptates eum, velit recusandae,
      ducimus earum aperiam commodi error officia optio aut et quae nam
      nostrum!`, ar: `منزل جميل ، خلاب للغاية وقريب من كل شيء في جي تيري! أ
      دافئ قليلاً لقضاء عطلة نهاية أسبوع حارة ، لكني أحب أن أعود خلال`},
    },
    {
      id: 3,
      img: "/assets/images/resource/review4.png",
      ratings: (
        <>
          {" "}
          <ul>
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-star"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-star"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-star"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-star"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-star"></i>
              </a>
            </li>
          </ul>
        </>
      ),
      reviewOn: "Sunset Studio",
      text: `Beautiful home, very picturesque and close to everything in jtree! A
          little warm for a hot weekend, but would love to come back during
          the cooler seasons! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Accusantium voluptates eum, velit recusandae,
          ducimus earum aperiam commodi error officia optio aut et quae nam
          nostrum!`,
    },
  ];

  return (
    <>
      {reviewContent.map((item) => (
        <div className="media pb30 mt30" key={item.id}>
          <img className="mr-3" src={item.img} alt="Review image" />
          <div className="media-body">
            <h5 className="review_title mt-0">
              {main.reviewText[lang]}{" "}
              <Link href="/agency-details/3">
                <a>
                  <span className="text-thm">{item.reviewOn[lang]}</span>
                </a>
              </Link>
              <span className="sspd_review float-end">{item.ratings}</span>
            </h5>
            <a className="review_date" href="#">
            {main.date[lang]}
            </a>
            <p className="para">{item.text[lang]}</p>

            <ul className="view_edit_delete_list mb0 mt35">
              <li
                className="list-inline-item"
                data-toggle="tooltip"
                data-placement="top"
                title="Edit"
              >
                <a href="#">
                  <span className="flaticon-edit"></span>
                </a>
              </li>
              {/* End edit */}

              <li
                className="list-inline-item"
                data-toggle="tooltip"
                data-placement="top"
                title="Delete"
              >
                <a href="#">
                  <span className="flaticon-garbage"></span>
                </a>
              </li>
              {/* End delete */}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default ClientReview;
