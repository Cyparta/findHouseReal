import Link from "next/link";
import { useSelector } from "react-redux";

const AuthorReview = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const main = useSelector((state) => state.lang.value.dashboard.reviews);
  const reviewContent = [
    {
      id: 1,
      img: "/assets/images/resource/review.png",
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
      reviewOn: { en: "Villa called Archangel", ar: "فيلا تسمى رئيس الملائكة" },
      text: {
        en: `Beautiful home, very picturesque and close to everything in jtree! A
      little warm for a hot weekend, but would love to come back during
      the cooler seasons! Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Accusantium voluptates eum, velit recusandae,
      ducimus earum aperiam commodi error officia optio aut et quae nam
      nostrum!`,
        ar: "ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد",
      },
    },
    {
      id: 2,
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
      reviewOn: { en: "Villa called Archangel", ar: "فيلا تسمى رئيس الملائكة" },
      text: {
        en: `Beautiful home, very picturesque and close to everything in jtree! A
      little warm for a hot weekend, but would love to come back during
      the cooler seasons! Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Accusantium voluptates eum, velit recusandae,
      ducimus earum aperiam commodi error officia optio aut et quae nam
      nostrum!`,
        ar: "ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد",
      },
    },
  ];
  return (
    <>
      {reviewContent.map((item) => (
        <div className="media mt30" key={item.id}>
          <img className="mr-3" src={item.img} alt="Review image" />
          <div className="media-body">
            <h5 className="review_title mt-0">
                {main.reviewText[lang]}{" "}
              <Link href="/agency-details/1">
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

export default AuthorReview;
