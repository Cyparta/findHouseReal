import Link from "next/link";
import { useSelector } from "react-redux";
import { blogs } from "../../data/blogs";

const Blogs = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  return (
    <>
      {blogs.map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id[lang]}>
          <div className="for_blog feat_property">
            <div className="thumb">
              <Link href={`/${item.to[lang]}`}>
                <a>
                  <img className="img-whp" src={item.img[lang]} alt="bh1.jpg" />
                </a>
              </Link>
            </div>
            <div className="details">
              <div className="tc_content">
                <p className="text-thm">{item.postMeta[lang]}</p>
                <h4>
                  <Link href={`/${item.to[lang]}`}>
                    <a>{item.title[lang]}</a>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blogs;
