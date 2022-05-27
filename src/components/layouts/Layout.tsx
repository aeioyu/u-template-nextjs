import React from "react";
import { Box, Stack } from "@mui/material";
import Link from "next/link";

const Layout: React.FC = ({ children }) => {
  return (
    <Box id="layout" sx={{ width: "100%", height: "100vh" }}>
      <Stack direction="row" spacing={2}>
        <Link href="/">
          <a>Homepage</a>
        </Link>
        <Link href="/test">
          <a>Page with param</a>
        </Link>
      </Stack>
      {children}
    </Box>
  );
};

export default Layout;
