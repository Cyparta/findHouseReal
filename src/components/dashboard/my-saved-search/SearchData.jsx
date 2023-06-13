import { useSelector } from "react-redux";

const SearchData = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const {searchData: main} = useSelector(state => state.lang.value.dashboard.advanced)
  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">{main.search[lang]}</th>
          <th className="dn-lg" scope="col"></th>
          <th className="dn-lg" scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col">{main.created[lang]}</th>
          <th scope="col">{main.action[lang]}</th>
        </tr>
      </thead>
      {/* End thead */}

      <tbody>
        <tr>
          <th className="title" scope="row">
            {main.li1[lang]}
          </th>
          <td className="dn-lg"></td>
          <td className="dn-lg"></td>
          <td></td>
          <td></td>
          <td className="para">December 30, 2019</td>
          <td>
            <ul className="view_edit_delete_list mb0">
              <li
                className="list-inline-item"
                data-toggle="tooltip"
                data-placement="top"
                title="View"
              >
                <a href="#">
                  <span className="flaticon-view"></span>
                </a>
              </li>
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
        </tr>
        {/* End tr */}

        <tr>
          <th className="title" scope="row">
            {main.li2[lang]}
          </th>
          <td className="dn-lg"></td>
          <td className="dn-lg"></td>
          <td></td>
          <td></td>
          <td className="para">December 30, 2019</td>
          <td>
            <ul className="view_edit_delete_list mb0">
              <li
                className="list-inline-item"
                data-toggle="tooltip"
                data-placement="top"
                title="View"
              >
                <a href="#">
                  <span className="flaticon-view"></span>
                </a>
              </li>
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
        </tr>
        {/* End tr */}

        <tr>
          <th className="title active" scope="row">
            {main.li3[lang]}
          </th>
          <td className="dn-lg"></td>
          <td className="dn-lg"></td>
          <td></td>
          <td></td>
          <td className="para">December 30, 2019</td>
          <td>
            <ul className="view_edit_delete_list mb0">
              <li
                className="list-inline-item"
                data-toggle="tooltip"
                data-placement="top"
                title="View"
              >
                <a href="#">
                  <span className="flaticon-view"></span>
                </a>
              </li>
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
        </tr>
        {/* End tr */}

        <tr>
          <th className="title" scope="row">
            {main.li4[lang]}
          </th>
          <td className="dn-lg"></td>
          <td className="dn-lg"></td>
          <td></td>
          <td></td>
          <td className="para">December 30, 2019</td>
          <td>
            <ul className="view_edit_delete_list mb0">
              <li
                className="list-inline-item"
                data-toggle="tooltip"
                data-placement="top"
                title="View"
              >
                <a href="#">
                  <span className="flaticon-view"></span>
                </a>
              </li>
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
        </tr>
        {/* End tr */}

        <tr>
          <th className="title" scope="row">
            {main.li5[lang]}
          </th>
          <td className="dn-lg"></td>
          <td className="dn-lg"></td>
          <td></td>
          <td></td>
          <td className="para">December 30, 2019</td>
          <td>
            <ul className="view_edit_delete_list mb0">
              <li
                className="list-inline-item"
                data-toggle="tooltip"
                data-placement="top"
                title="View"
              >
                <a href="#">
                  <span className="flaticon-view"></span>
                </a>
              </li>
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
        </tr>
        {/* End tr */}

        <tr>
          <th className="title" scope="row">
            {main.li6[lang]}
          </th>
          <td className="dn-lg"></td>
          <td className="dn-lg"></td>
          <td></td>
          <td></td>
          <td className="para">December 30, 2019</td>
          <td>
            <ul className="view_edit_delete_list mb0">
              <li
                className="list-inline-item"
                data-toggle="tooltip"
                data-placement="top"
                title="View"
              >
                <a href="#">
                  <span className="flaticon-view"></span>
                </a>
              </li>
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
        </tr>
        {/* End tr */}
      </tbody>
      {/* End tbody */}
    </table>
  );
};

export default SearchData;
