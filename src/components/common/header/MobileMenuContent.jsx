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
                src="/findHouse/assets/images/logo/logo.png"
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
          <SubMenu
            title={main.home[lang]}
            className={
              home.some((page) => page.routerPath === route.pathname)
                ? "parent-menu-active"
                : undefined
            }
          >
            {home.map((val, i) => (
              <MenuItem key={i} active={true}>
                <Link href={val.routerPath}>
                  <a
                    className={
                      val.routerPath === route.pathname
                        ? "ui-active"
                        : undefined
                    }
                  >
                    {val.name[lang]}
                  </a>
                </Link>
              </MenuItem>
            ))}
          </SubMenu>
          {/* End Home Home */}

          {/* listing.title[lang] */}
          <SubMenu
            title={main.listing[lang]}
            className={
              listing.some((parent) => {
                return parent.items.some(
                  (page) => page.routerPath === route.pathname
                );
              })
                ? "parent-menu-active"
                : undefined
            }
          >
            {listing.map((item) => (
              <SubMenu
                title={item.title[lang]}
                className={
                  item.items.some((page) => page.routerPath === route.pathname)
                    ? "ui-active plus alt"
                    : "plus alt"
                }
                key={item.id}
              >
                {item.items.map((val, i) => (
                  <MenuItem key={i}>
                    <Link href={val.routerPath}>
                      <a
                        className={
                          route.pathname === val.routerPath
                            ? "ui-active"
                            : undefined
                        }
                      >
                        {val.name[lang]}
                      </a>
                    </Link>
                  </MenuItem>
                ))}
              </SubMenu>
            ))}
          </SubMenu>
          {/* End Pages Listing */}

          <SubMenu
            title={property[0].title[lang]}
            className={
              property.some((parent) => {
                return parent.items.some(
                  (page) =>
                    page.routerPath === route.pathname ||
                    page.routerPath + "/[id]" === route.pathname
                );
              })
                ? "parent-menu-active"
                : undefined
            }
          >
            {property.map((item) => (
              <SubMenu
                title={item.title[lang]}
                className={
                  item.items.some(
                    (page) =>
                      page.routerPath === route.pathname ||
                      page.routerPath + "/[id]" === route.pathname
                  )
                    ? "ui-active plus alt"
                    : "plus alt"
                }
                key={item.id}
              >
                {item.items.map((val, i) => (
                  <MenuItem key={i}>
                    <Link href={val.routerPath}>
                      <a
                        className={
                          route.pathname === val.routerPath ||
                          val.routerPath + "/[id]" === route.pathname
                            ? "ui-active"
                            : undefined
                        }
                      >
                        {val.name[lang]}
                      </a>
                    </Link>
                  </MenuItem>
                ))}
              </SubMenu>
            ))}
          </SubMenu>
          {/* End Pages Property */}

          <SubMenu
            title={main.blog[lang]}
            className={
              blog.some(
                (page) =>
                  page.routerPath === route.pathname ||
                  page.routerPath + "/[id]" === route.pathname
              )
                ? "parent-menu-active"
                : undefined
            }
          >
            {blog.map((val, i) => (
              <MenuItem key={i}>
                <Link href={val.routerPath}>
                  <a
                    className={
                      route.pathname === val.routerPath ||
                      val.routerPath + "/[id]" === route.pathname
                        ? "ui-active"
                        : undefined
                    }
                  >
                    {val.name[lang]}
                  </a>
                </Link>
              </MenuItem>
            ))}
          </SubMenu>
          {/* End pages Blog */}

          <SubMenu
            title={main.pagesHead[lang]}
            className={
              pages.some((page) => page.routerPath === route.pathname)
                ? "parent-menu-active"
                : undefined
            }
          >
            {pages.map((val, i) => (
              <MenuItem key={i}>
                <Link href={val.routerPath}>
                  <a
                    className={
                      route.pathname === val.routerPath
                        ? "ui-active"
                        : undefined
                    }
                  >
                    {val.name[lang]}
                  </a>
                </Link>
              </MenuItem>
            ))}
          </SubMenu>
          {/* End pages Pages */}

          <MenuItem>
            <Link href="/contact">
              <a
                className={
                  route.pathname === "/contact" ? "ui-active" : undefined
                }
              >
                {lang === "ar" ? "اتصل" : "contact"}
              </a>
            </Link>
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
