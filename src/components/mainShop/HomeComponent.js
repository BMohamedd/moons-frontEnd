import React from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import { Outlet } from "react-router-dom";

function HomeComponent({ children }) {
  return (
    <div>
      <Navbar />
      <Outlet />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default HomeComponent;
