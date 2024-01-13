import React, { useState } from "react";
import { useEffect } from "react";
import { toggleLang } from "../../features/lang/langSlice";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown';

const LangBtn = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const dispatch = useDispatch();
  const [toggleLangto, setToggle] = useState(lang);

  const handleToggleLangto = (e) => {
    localStorage.setItem("lang", e.target.value);
    setToggle(localStorage.getItem("lang"));
    dispatch(toggleLang(localStorage.getItem("lang")));
  };

  const handleChange = (val) => {
    localStorage.setItem("lang", val);
    setToggle(localStorage.getItem("lang"));
    dispatch(toggleLang(localStorage.getItem("lang")));
  }

  useEffect(() => {
    document.getElementsByTagName("html")[0].setAttribute("lang", lang);
    document.querySelector("body").setAttribute("className", lang);
    setToggle(lang);
  }, [toggleLangto, lang]);
  return (
    <>
      {/* <li className="list-inline-item add_listing" style={{ width: "100px" }}>
        <select
          id="valueneed"
          name="country"
          className="theme-btn"
          value={toggleLangto}
          onChange={(e) => handleToggleLangto(e)}
        >
          <option value="en" className="opt-item">English</option>
          <option value="ar" className="opt-item">عربي</option>
        </select>
      </li> */}
      <li className="list-inline-item add_listing list-dropdown" style={{width:"90px"}}>
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            {lang === "ar" ? "عربي" :"English"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleChange('en')}>English</Dropdown.Item>
            <Dropdown.Item onClick={() => handleChange('ar')}>عربي</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </li>
    </>
  );
};

export default LangBtn;
