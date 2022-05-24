import { configs } from "@/configs/configs";
import { Box } from "@mui/material";
import React from "react";
import SEO from "@/components/shared/SEO";
import { dehydrate, QueryClient } from "react-query";
import { usePayment } from "@/factories/payment.factory";
import { NextPage } from "next";


const HomePage: NextPage = () => {
  return (
    <Box id="home-page" sx={{ overflow: "hidden", height: "100%", width: "100%" }}>
      <SEO />
     
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

export default HomePage;
