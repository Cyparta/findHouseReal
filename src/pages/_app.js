import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import ScrollToTop from "../components/common/ScrollTop";
import Seo from "../components/common/seo";
import "../index.scss";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Seo
        font={
       
          'https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap'
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
