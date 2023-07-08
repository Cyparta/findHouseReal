import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";

import { useRouter } from "next/router";
import Page from "./[id]/page";

const index = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log(id)
  return (
    <>
      <Seo pageTitle="Listing Single – Details V1" />
      <Page />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
