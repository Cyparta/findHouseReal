import properties from "../../../data/properties";
import { useSelector } from "react-redux";
const TableData = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const {pending} = useSelector(state => state.lang.value.dashboard.propeties)
  let theadConent = [
    "Listing Title",
    "Date published",
    "Status",
    "View",
    "Action",
  ];
  let tbodyContent = properties?.slice(0, 4)?.map((item) => (
    <tr key={item.id[lang]}>
      <td scope="row">
        <div className="feat_property list favorite_page style2">
          <div className="thumb">
            <img className="img-whp cover" src={item.img[lang]} alt="fp1.jpg" />
            <div className="thmb_cntnt">
              <ul className="tag mb0">
                <li className="list-inline-item">
                  <a href="#">For Rent</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="details">
            <div className="tc_content">
              <h4>{item.title[lang]}</h4>
              <p>
                <span className="flaticon-placeholder"></span>
                {item.location[lang]}
              </p>
              <a className="fp_price text-thm" href="#">
                ${item.price[lang]}
                <small>/mo</small>
              </a>
            </div>
          </div>
        </div>
      </td>
      {/* End td */}

      <td>30 December, 2020</td>
      {/* End td */}

      <td>
        <span className="status_tag badge">{pending[lang]}</span>
      </td>
      {/* End td */}

      <td>2,345</td>
      {/* End td */}

      <td>
        <ul className="view_edit_delete_list mb0">
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
          {/* End li */}

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
        </ul>
      </td>
      {/* End td */}
    </tr>
  ));

  return (
    <>
      <table className="table">
        <thead className="thead-light">
          <tr>
            {theadConent.map((value, i) => (
              <th scope="col" key={i}>
                {value[lang]}
              </th>
            ))}
          </tr>
        </thead>
        {/* End theaad */}

        <tbody>{tbodyContent}</tbody>
      </table>
    </>
  );
};

export default TableData;
