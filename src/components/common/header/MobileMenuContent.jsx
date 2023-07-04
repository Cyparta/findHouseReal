import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import Link from "next/link";
import { useRouter } from "next/router";
import { home, listing, blog, pages, sign, property } from "../../../data/nav";
import { useSelector } from "react-redux";
import LangBtn from "../../langBtn/LangBtn";

const MobileMenuContent = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const main = useSelector((state) => state.lang.value.pages);
  const route = useRouter();

  return (
    <ProSidebar>
      <SidebarHeader>
        <div className="sidebar-header">
          <Link href="/">
            <a className="sidebar-header-inner">
              <img
                className="nav_logo_img img-fluid "
                src="/findHouseReal/assets/images/logo/logo.png"
                alt="header-logo.png"
              />
            </a>
          </Link>
          {/* End .logo */}

          <div
            className="fix-icon"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <span className="flaticon-close"></span>
          </div>
          {/* Mobile Menu close icon */}
        </div>

        {/* End logo */}
      </SidebarHeader>

      <SidebarContent>
        <Menu>
          <MenuItem active={true}>
            <Link href={home[0].routerPath}>
              <a
                className={
                  home[0].routerPath === route.pathname
                    ? "ui-active"
                    : undefined
                }
              >
                {home[0].name[lang]}
              </a>
            </Link>
          </MenuItem>

          {/* End Home Home */}

          {/* listing.title[lang] */}

          {/* End Pages Listing */}

          {/* End Pages Property */}
          <MenuItem>
          <ul>
            <li className="dropitem">
              <Link href="/listing-grid-v1">
                <a href="#">
                  <span className="title">{main.listing[lang]}</span>
                </a>
              </Link>
            </li></ul>
          </MenuItem>
          <MenuItem>
          <ul>
            <li key={pages[1].id} className="dropitem">
              <Link href={pages[1].routerPath}>
                <a
                  className={
                    pages[1].pathname === pages[1].routerPath
                      ? "ui-active  mx-2 text-capitalize"
                      : undefined
                  }
                >
                  {pages[1].name[lang]}
                </a>
              </Link>
            </li></ul>
          </MenuItem>
          <MenuItem>
          <ul>
            <li key={pages[2].id} className="dropitem">
              <Link href={pages[2].routerPath}>
                <a
                  className={
                    pages[2].pathname === pages[2].routerPath
                      ? "ui-active  mx-2 text-capitalize"
                      : undefined
                  }
                >
                  {pages[2].name[lang]}
                </a>
              </Link>
            </li></ul>
          </MenuItem>
          <MenuItem>
          <ul>
            <li key={pages[3].id} className="dropitem">
              <Link href={pages[3].routerPath}>
                <a
                  className={
                    pages[3].pathname === pages[3].routerPath
                      ? "ui-active  mx-2 text-capitalize"
                      : undefined
                  }
                >
                  {pages[3].name[lang]}
                </a>
              </Link>
            </li></ul>
          </MenuItem>
          {/* End pages Blog */}

          <MenuItem>
          <ul>
            <li className="dropitem">
              <Link
                href="/blog-list-3"
                className={
                  blog.some(
                    (page) =>
                      page.routerPath === route.pathname ||
                      page.routerPath + "/[id]" === route.pathname
                  )
                    ? "ui-active  mx-2 text-capitalize"
                    : undefined
                }
              >
                <span className="title text-capitalize">
                  {main.blog1[lang]}
                </span>
                {/* <span className="arrow"></span> */}
              </Link>
            </li></ul>
          </MenuItem>

          {/* End pages Pages */}
          <MenuItem>
            <ul>
              <li className="last">
                <Link href="/contact">
                  <a
                    className={
                      route.pathname === "/contact" ? "ui-active" : undefined
                    }
                  >
                    {main.contact[lang]}
                  </a>
                </Link>
              </li>
            </ul>
          </MenuItem>

          <MenuItem>
            <Link href="/login">
              <a
                className={
                  route.pathname === "/login" ? "ui-active" : undefined
                }
              >
                <span className="flaticon-user"></span> {sign.login[lang]}
              </a>
            </Link>
          </MenuItem>

          <MenuItem>
            <Link href="/register">
              <a
                className={
                  route.pathname === "/register" ? "ui-active" : undefined
                }
              >
                <span className="flaticon-edit"></span> {sign.register[lang]}
              </a>
            </Link>
          </MenuItem>
        </Menu>
      </SidebarContent>

      <div>
        <LangBtn />
      </div>

      <SidebarFooter>
        <Link href="/">
          <a className="btn btn-block btn-lg btn-thm circle">
            <span className="flaticon-plus"></span>
            {main.createListing[lang]}
          </a>
        </Link>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default MobileMenuContent;
