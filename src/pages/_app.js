import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import ScrollToTop from "../components/common/ScrollTop";
import Seo from "../components/common/seo";
import "../index.scss";
import Error from "./listing-details-v1/error";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
  ( function(l){
      if(l.search[1]==="/"){
        var decoded=l.search.slice(1).split("&").map((s)=>{
          return s.replace(/~and~/g,'&')
        }).join('?')
        window.history.replaceState(null,null,l.pathname.slice(0,-1)+decoded+l.hash)
      }
    }(window?.location))
}

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Seo
        font={
          "https://fonts.googleapis.com/css?family=Nunito:400,400i,500,600,700&display=swap"
        }
      />
      <Provider store={store}>
        {/* <div> */}
        <Component {...pageProps} />
        {/* </div> */}
      </Provider>
        {/* <ErrorBoundary fallback={<Error/>}></ErrorBoundary> */}
      <ScrollToTop />
    </>
  );
}

export default MyApp;
