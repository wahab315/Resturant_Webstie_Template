import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Link } from "react-router-dom";
// Icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 1,
    name: "Menu",
    path: "/menu",
  },
  {
    id: 3,
    name: "About",
    path: "/about",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Menus className="mobile-menu" />
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 1 }}
            >
              <FastfoodIcon />
              My Resturant
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
            >
              {!open ? (
                <MenuIcon onClick={handleDrawerToggle} />
              ) : (
                <CloseIcon onClick={handleDrawerToggle} />
              )}
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Menus className="navigation-menu" />
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer
            variant="temporary"
            open={open}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
                height: "100vh",
                bgcolor: "black",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </>
  );
};

export default Header;

const Menus = (props) => {
  return (
    <>
      <ul className={`${props.className}`}>
        {navData.map((item) => {
          return (
            <>
              <li key={item.id}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};
