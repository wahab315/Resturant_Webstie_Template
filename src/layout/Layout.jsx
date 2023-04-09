import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components/common";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
