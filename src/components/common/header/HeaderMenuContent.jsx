import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import LangBtn from "../../langBtn/LangBtn";
const HeaderMenuContent = ({ float = "" }) => {
  const lang = useSelector((state) => state.lang.value.lang);
  const main = useSelector((state) => state.lang.value.pages);
  const route = useRouter();

  const home = [
    {
      id: 1,
      name: main.home[lang],
      routerPath: "/",
    },
  ];

  const listing = [
    {
      id: 1,
      title: main.listingGrid[lang],
      items: [
        {
          name: main.grid1[lang],
          routerPath: "/listing-grid-v1",
        },
        {
          name: main.grid2[lang],
          routerPath: "/listing-grid-v2",
        },
        {
          name: main.grid3[lang],
          routerPath: "/listing-grid-v3",
        },
        {
          name: main.grid4[lang],
          routerPath: "/listing-grid-v4",
        },
        {
          name: main.grid5[lang],
          routerPath: "/listing-grid-v5",
        },
        {
          name: main.grid6[lang],
          routerPath: "/listing-grid-v6",
        },
      ],
    },
    {
      id: 2,
      title: main.listingList[lang],
      items: [
        {
          name: "List V1",
          routerPath: "/listing-list-v1",
        },
      ],
    },
    {
      id: 3,
      title: main.listingStyle[lang],
      items: [
        {
          name: main.parallaxStyle[lang],
          routerPath: "/parallax-style",
        },
        {
          name: main.sliderStyle[lang],
          routerPath: "/slider-style",
        },
        {
          name: main.mapHeader[lang],
          routerPath: "/map-header",
        },
      ],
    },
    {
      id: 4,
      title: main.listingHalf[lang],
      items: [
        {
          name: main.map1[lang],
          routerPath: "/listing-map-v1",
        },
        {
          name: main.map2[lang],
          routerPath: "/listing-map-v2",
        },
        {
          name: main.map3[lang],
          routerPath: "/listing-map-v3",
        },
        {
          name: main.map4[lang],
          routerPath: "/listing-map-v4",
        },
      ],
    },
    {
      id: 5,
      title: main.agentView[lang],
      items: [
        {
          name: main.agent1[lang],
          routerPath: "/agent-v1",
        },
        {
          name: main.agent2[lang],
          routerPath: "/agent-v2",
        },
        {
          name: main.agent3[lang],
          routerPath: "/agent-details",
        },
      ],
    },
    {
      id: 6,
      title: main.agenciesView[lang],
      items: [
        {
          name: main.agencies1[lang],
          routerPath: "/agency-v1",
        },
        {
          name: main.agencies2[lang],
          routerPath: "/agency-v2",
        },
        {
          name: main.agencies3[lang],
          routerPath: "/agency-details",
        },
      ],
    },
  ];

  const property = [
    {
      id: 1,
      title: main.userAdmin[lang],
      items: [
        {
          name: main.dashboard[lang],
          routerPath: "/my-dashboard",
        },
        {
          name: main.properties[lang],
          routerPath: "/my-properties",
        },
        {
          name: main.message[lang],
          routerPath: "/my-message",
        },
        {
          name: main.review[lang],
          routerPath: "/my-review",
        },
        {
          name: main.fav[lang],
          routerPath: "/my-favourites",
        },
        {
          name: main.profile[lang],
          routerPath: "/my-profile",
        },
        {
          name: main.package[lang],
          routerPath: "/my-package",
        },
        {
          name: main.saved[lang],
          routerPath: "/my-saved-search",
        },
        {
          name: main.addProp[lang],
          routerPath: "/",
        },
      ],
    },
    {
      id: 2,
      title: main.listingSingle[lang],
      items: [
        {
          name: main.single1[lang],
          routerPath: "/listing-details-v1",
        },
        {
          name: main.single2[lang],
          routerPath: "/listing-details-v2",
        },
        {
          name: main.single3[lang],
          routerPath: "/listing-details-v3",
        },
        {
          name: main.single4[lang],
          routerPath: "/listing-details-v4",
        },
      ],
    },
  ];

  const blog = [
    { id: 1, name: main.blog1[lang], routerPath: "/blog-list-1" },
    { id: 2, name: main.blog2[lang], routerPath: "/blog-list-2" },
    { id: 3, name: main.blog3[lang], routerPath: "/blog-list-3" },
    {
      id: 4,
      name: main.blog4[lang],
      routerPath: "/blog-details",
    },
  ];

  const pages = [
    { id: 1, name: main.aboutUs[lang], routerPath: "/about-us" },
    { id: 2, name: main.gallery[lang], routerPath: "/gallery" },
    {
      id: 3,
      name: main.gallerydecoration[lang],
      routerPath: "/gallerydecoration",
    },
    { id: 3, name: main.faq[lang], routerPath: "/faq" },
    { id: 4, name: main.logIn[lang], routerPath: "/login" },
    { id: 5, name: main.compare[lang], routerPath: "/compare" },
    { id: 6, name: main.membership[lang], routerPath: "/membership" },

    { id: 7, name: main.register[lang], routerPath: "/register" },
    { id: 8, name: main.service[lang], routerPath: "/service" },
    { id: 9, name: main.error[lang], routerPath: "/404" },
    { id: 10, name: main.terms[lang], routerPath: "/terms" },
  ];

  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end"
      data-menu-style="horizontal"
    >
      {/* <!-- Level Two--> */}
      <li>
        <Link href={home[0].routerPath}>
          <a
            className={
              route.pathname === home[0].routerPath ? "ui-active" : undefined
            }
          >
            <span>{home[0].name}</span>
          </a>
        </Link>
      </li>
      <li className="dropitem">
        <Link href="/about-us">
          <a
            // href="#"
            className={route.pathname === "/about-us" ? "ui-active" : undefined}
          >
            <span className="title">{main.aboutUs[lang]}</span>
          </a>
        </Link>
      </li>
      <li className="dropitem">
        <Link href="/blog-list-1">
          <a
            // href="#"
            className={
              route.pathname === "/blog-list-1" ? "ui-active" : undefined
            }
          >
            <span className="title">{main.blog1[lang]}</span>
          </a>
        </Link>
      </li>
      {/* End .dropitem */}
      <li className="dropitem">
        <Link href="/listing-grid-v1">
          <a
            // href="#"
            className={
              route.pathname === "/listing-grid-v1" ? "ui-active" : undefined
            }
          >
            <span className="title">{main.listing[lang]}</span>
          </a>
        </Link>
      </li>

      {/* End .dropitem */}

      {/* End .dropitem */}

      {/* End .dropitem */}
      <li className="dropitem">
        <Link href="/gallerydecoration">
          <a
            // href="#"
            className={
              route.pathname === "/gallerydecoration" ? "ui-active" : undefined
            }
          >
            <span className="title">{main.gallerydecoration[lang]}</span>
          </a>
        </Link>
      </li>
      <li className="dropitem">
        <Link href="/galleryreal">
          <a
            // href="#"
            className={
              route.pathname === "/galleryreal" ? "ui-active" : undefined
            }
          >
            <span className="title">{main.galleryreal[lang]}</span>
          </a>
        </Link>
      </li>

      <li className="dropitem">
        <Link href="/gallery">
          <a
            // href="#"
            className={route.pathname === "/gallery" ? "ui-active" : undefined}
          >
            <span className="title">{main.gallery[lang]}</span>
          </a>
        </Link>
      </li>

      {/* End .dropitem */}

      <li className="last">
        <Link href="/contact">
          <a
            className={route.pathname === "/contact" ? "ui-active" : undefined}
          >
            {main.contact[lang]}
          </a>
        </Link>
      </li>
      {/* End .dropitem */}

      <li className={`list-inline-item list_s ${float}`}>
        <a
          href="#"
          className="btn flaticon-user"
          data-bs-toggle="modal"
          data-bs-target=".bd-example-modal-lg"
        >
          <span className="dn-lg">
            {main.login[lang]} / {main.register[lang]}
          </span>
        </a>
      </li>
      {/* End .dropitem */}
      <LangBtn />
      {/* <li className={`list-inline-item add_listing ${float}`}>
        <Link href="/">
          <a>
            <span className="flaticon-plus"></span>
            <span className="dn-lg"> {main.createListing[lang]}</span>
          </a>
        </Link>
      </li> */}
      {/* End .dropitem */}
    </ul>
  );
};

export default HeaderMenuContent;
