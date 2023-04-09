import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", bgcolor: "black", color: "white", p: 3 }}>
        <Typography variant="h5">All rights reserved &copy; .......</Typography>
      </Box>
    </>
  );
};

export default Footer;
