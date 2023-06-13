import Link from "next/link";
import { useSelector } from "react-redux";

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
      en: "© 2021 Dar Farah Real Estate Development.",
      ar: "© 2021 دار فرح للتطوير العقاري.",
    },
    secondp: { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  };
  return (
    <div className="row">
      {/* End .col */}

      <div className="col-lg-12 col-xl-12">
        <div className="copyright-widget text-center">
          <p>
            &copy; {new Date().getFullYear()} by{" "}
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
