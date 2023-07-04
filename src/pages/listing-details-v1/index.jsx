import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import ListingDetailsV1 from "../../components/listing-details-v1";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log(id)
  return (
    <>
      <Seo pageTitle="Listing Single – Details V1" />
      <ListingDetailsV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
