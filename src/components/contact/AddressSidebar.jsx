import { useSelector } from "react-redux";
import Social from "../common/footer/Social";

const AddressSidebar = () => {
  const lang = useSelector(state => state.lang.value.lang);
  const {contactUs} = useSelector(state => state.lang.value.contact)
  return (
    <div className="contact_localtion">
      <h4>{contactUs.heading[lang]}</h4>
      <p>
        {contactUs.text[lang]}
      </p>
      <div className="content_list">
        <h5>{contactUs.address[lang]}</h5>
        <p>
          {contactUs.addressText[lang]}
        </p>
      </div>
      <div className="content_list">
        <h5>{contactUs.phone[lang]}</h5>
        <a href="tel:+01050403363">{contactUs.phoneText[lang]}</a> 
      </div>
      <div className="content_list">
        <h5>{contactUs.mail[lang]}</h5>
        <a href="mailto:info@findhouse.com">{contactUs.mailText[lang]}</a>
      </div>
      <div className="content_list">
        <h5>{contactUs.skype[lang]}</h5>
        <a href="mailto:skypeText">{contactUs.skypeText[lang]}</a>
      </div>
      <h5>{contactUs.followUs[lang]}</h5>
      <ul className="contact_form_social_area">
        <Social />
      </ul>
    </div>
  );
};

export default AddressSidebar;
