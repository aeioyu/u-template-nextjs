import React from "react";
import { Box } from "@mui/material";
import SEO from "@/components/shared/SEO";
import { NextPage } from "next";
import { useRouter } from "next/router";

// import { dehydrate, QueryClient } from "react-query";
// import { configs } from "@/configs/configs";

const PageWithParams: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Box id="home-page" sx={{ overflow: "hidden", height: "100%", width: "100%" }}>
      <SEO />
      Page Param: {id}
    </Box>
  );
};

// export async function getStaticProps() {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery("mattertags", () => getMattertags());
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }

export default PageWithParams;
