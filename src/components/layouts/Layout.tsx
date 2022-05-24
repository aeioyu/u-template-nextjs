import React from "react";
import { Box } from "@mui/material";

const Layout: React.FC = ({ children }) => {
  return (
    <Box id="layout" sx={{ width: "100%", height: "100vh" }}>
      {children}
    </Box>
  );
};

export default Layout;
