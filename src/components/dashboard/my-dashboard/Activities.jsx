import { useSelector } from "react-redux";

const Activities = () => {
  const lang = useSelector(state => state.lang.value.lang);
  const {recentActivites: main} = useSelector(state => state.lang.value.dashboard.dash);

  return (
    <>
      <div className="grid">
        <ul>
          <li className="list-inline-item">
            <div className="icon">
              <span className="flaticon-home"></span>
            </div>
          </li>
          {/* End li */}

          <li className="list-inline-item">
            <p>
              {main.li[lang]}
            </p>
          </li>
        </ul>
      </div>
      {/* End .grid */}

      <div className="grid">
        <ul>
          <li className="list-inline-item">
            <div className="icon">
              <span className="flaticon-chat"></span>
            </div>
          </li>
          {/* End li */}

          <li className="list-inline-item">
            <p>
              {main.li2[lang]}
            </p>
          </li>
        </ul>
      </div>
      {/* End .grid */}

      <div className="grid">
        <ul>
          <li className="list-inline-item">
            <div className="icon">
              <span className="flaticon-heart"></span>
            </div>
          </li>
          {/* End li */}

          <li className="list-inline-item">
            <p>
              {main.li3[lang]}
            </p>
          </li>
        </ul>
      </div>
      {/* End .grid */}

      <div className="grid">
        <ul>
          <li className="list-inline-item">
            <div className="icon">
              <span className="flaticon-home"></span>
            </div>
          </li>
          {/* End li */}

          <li className="list-inline-item">
            <p>
              {main.li4[lang]}
            </p>
          </li>
        </ul>
      </div>
      {/* End .grid */}

      <div className="grid">
        <ul>
          <li className="list-inline-item">
            <div className="icon">
              <span className="flaticon-chat"></span>
            </div>
          </li>
          {/* End li */}

          <li className="list-inline-item">
            <p>
              {main.li5[lang]}
            </p>
          </li>
        </ul>
      </div>
      {/* End .grid */}

      <div className="grid mb0">
        <ul className="pb0 mb0 bb_none">
          <li className="list-inline-item">
            <div className="icon">
              <span className="flaticon-heart"></span>
            </div>
          </li>
          {/* End li */}

          <li className="list-inline-item">
            <p>
              {main.li6[lang]}
            </p>
          </li>
        </ul>
      </div>
      {/* End .grid */}
    </>
  );
};

export default Activities;
