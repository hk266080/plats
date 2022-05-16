import { AppBar, Toolbar } from "@mui/material";
import TemporaryDrawer  from "./TemporaryDrawer"
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  

  return (
    <AppBar className="bg-transparent"  elevation={0}>
      {isDesktop ? (
        <Toolbar>
             
          <Box
            component="img"
            sx={{
              height: 64,
              marginLeft: "120px",
            }}
            alt="Your logo."
            src="/images/plats_logo.png"
          />
        </Toolbar>
      ) : (
        <Toolbar>
          <Box
            component="img"
            sx={{
              height: 64,
            }}
            alt="Your logo."
            src="/images/plats_logo.png"
          />
          <Box sx={{marginLeft:"300px",marginBottom:"30px"}}>
          <TemporaryDrawer />
          </Box>
         
        </Toolbar>
      )}
    </AppBar>
  );
}
