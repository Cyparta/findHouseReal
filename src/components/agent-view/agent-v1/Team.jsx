import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAgentItemLength } from "../../../features/agent/agentSlice";
import agents from "../../../data/agents";

const Team = () => {
  const { name, category, city, listen } =
    useSelector((state) => state.agent) || {};
  const lang = useSelector((state) => state.lang.value.lang);
  const {address} = useSelector((state) => state.lang.value.agent);
  const dispatch = useDispatch();

  // name
  const nameHandler = (item) =>
    item.name.toLowerCase().includes(name.toLowerCase());

  // category
  const categoryHandler = (item) =>
    item.type.toLowerCase().includes(category.toLowerCase());

  // city
  const cityHandler = (item) =>
    item.city.toLowerCase().includes(city.toLowerCase());

  let content = agents.slice(0, 16).map((item) => (
    <div className="col-md-6 col-lg-6" key={item.id[lang]}>
      <div className="feat_property home7 agent">
        <div className="thumb">
          <Link href={`/agent-details/${item.id[lang]}`}>
            <a>
              <img className="img-whp" src={item.img[lang]} alt="bh1.jpg" />
            </a>
          </Link>
          <div className="thmb_cntnt">
            <ul className="tag mb0">
              <li className="list-inline-item dn"></li>
              <li className="list-inline-item">
                <a href="#">{item.noOfListings[lang]} Listings</a>
              </li>
            </ul>
          </div>
        </div>
        {/* End .thumb */}

        <div className="details">
          <div className="tc_content">
            <h4>
              <Link href={`/agent-details/${item.id}`}>
                <a>{item.name[lang]}</a>
              </Link>
            </h4>
            <p className="text-thm">{item.type[lang]}</p>
            <ul className="prop_details mb0">
              <li>
                <a href="#">{address.office[lang]}: {item.office[lang]}</a>
              </li>
              <li>
                <a href="#">{address.mobile[lang]}: {item.mobile[lang]}</a>
              </li>
              <li>
                <a href="#">{address.fax[lang]}: {item.fax[lang]}</a>
              </li>
              <li>
                <a href="#">{address.email[lang]}: {item.email[lang]}</a>
              </li>
            </ul>
          </div>
          {/* End .tc_content */}

          <div className="fp_footer">
            <ul className="fp_meta float-start mb0">
              {item.socialList.map((social, i) => (
                <li className="list-inline-item" key={i}>
                  <a
                    href={social.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`fa ${social.icon[lang]}`}></i>
                  </a>
                </li>
              ))}
            </ul>
            <div className="fp_pdate float-end ">
              <Link href={`/agent-details/${item.id[lang]}`}>
                <a className="text-thm">
                  {address.viewBtn[lang]} <i className="fa fa-angle-right"></i>
                </a>
              </Link>
            </div>
          </div>
          {/* End .fp_footer */}
        </div>
      </div>
    </div>
  ));

  // agent item length
  useEffect(() => {
    dispatch(addAgentItemLength(content.length));
  }, [dispatch, addAgentItemLength, content]);

  return <>{content}</>;
};

export default Team;
