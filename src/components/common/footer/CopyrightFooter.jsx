import Link from "next/link";
import { useSelector } from "react-redux";
import copywrite from "../../../../public/assets/images/cyparta.png";
import Image from "next/image";
const CopyrightFooter = () => {
  let lang = useSelector((state) => state.lang.value.lang);
  const menuItems = [
    { id: 1, name: { en: "Home", ar: "الصفحة الرئيسيه" }, routeLink: "/" },
    {
      id: 2,
      name: { en: "Listing", ar: "قائمة" },
      routeLink: "/listing-grid-v3",
    },
    { id: 3, name: "Property", routeLink: "/listing-grid-v4" },
    { id: 4, name: "About Us", routeLink: "/about-us" },
    { id: 5, name: "Blog", routeLink: "/blog-list-3" },
    { id: 6, name: "Contact", routeLink: "/contact" },
  ];
  const translatecopyright = {
    firstp: {
      en: "cyparta ",
      ar: "cyparta ",
    },
    secondp: { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  };
  return (
    <div className="row">
      {/* End .col */}

      <div className="col-lg-12 col-xl-12">
        <div
          className="copyright-widget text-center d-flex
          justify-content-evenly
    align-items-center"
        >
          <Image src={copywrite} alt="" />
          <p className="m-0">
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://themeforest.net/user/ib-themes"
              target="_blank"
              rel="noreferrer"
            >
              {translatecopyright.firstp[lang]}
            </a>
            {translatecopyright.secondp[lang]}
          </p>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CopyrightFooter;
