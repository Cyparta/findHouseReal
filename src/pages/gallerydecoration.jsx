import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Gallery from "../components/gallery";
import { decoration } from "../data/menuData";

const index = () => {
  return (
    <>
      <Seo pageTitle="Gallery" />
      <Gallery nameofgallery={decoration} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
