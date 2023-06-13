import { useSelector } from "react-redux";

const SearchData = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const main = useSelector(state => state.lang.value.dashboard.package)
  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">{main.li1[lang]}</th>
          <th scope="col">{main.li2[lang]}</th>
          <th scope="col">{main.li3[lang]}</th>
          <th scope="col">{main.li4[lang]}</th>
          <th scope="col">{main.li5[lang]}</th>
          <th scope="col">{main.li6[lang]}</th>
        </tr>
      </thead>
      {/* End thead */}

      <tbody>
        <tr>
          <th scope="row">{main.free[lang]}</th>
          <td>0</td>
          <td>3</td>
          <td>8</td>
          <td>2 MB / 20 MB</td>
          <td>December 31, 2020</td>
        </tr>
        {/* End tr */}

        <tr>
          <th scope="row">{main.free[lang]}</th>
          <td>0</td>
          <td>3</td>
          <td>8</td>
          <td>2 MB / 20 MB</td>
          <td>December 31, 2020</td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="active" scope="row">
            {main.free[lang]}
          </th>
          <td>0</td>
          <td>3</td>
          <td>8</td>
          <td>2 MB / 20 MB</td>
          <td>December 31, 2020</td>
        </tr>
        {/* End tr */}

        <tr>
          <th scope="row">{main.free[lang]}</th>
          <td>0</td>
          <td>3</td>
          <td>8</td>
          <td>2 MB / 20 MB</td>
          <td>December 31, 2020</td>
        </tr>
        {/* End tr */}

        <tr>
          <th scope="row">{main.free[lang]}</th>
          <td>0</td>
          <td>3</td>
          <td>8</td>
          <td>2 MB / 20 MB</td>
          <td>December 31, 2020</td>
        </tr>
        {/* End tr */}

        <tr>
          <th scope="row">{main.free[lang]}</th>
          <td>0</td>
          <td>3</td>
          <td>8</td>
          <td>2 MB / 20 MB</td>
          <td>December 31, 2020</td>
        </tr>
        {/* End tr */}

        <tr>
          <th scope="row">{main.free[lang]}</th>
          <td>0</td>
          <td>3</td>
          <td>8</td>
          <td>2 MB / 20 MB</td>
          <td>December 31, 2020</td>
        </tr>
        {/* End tr */}
      </tbody>
    </table>
  );
};

export default SearchData;
