import { useState } from "react";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [EN, setEN] = useState(true);
  return (
    <div className="container">
      <Navbar EN={EN} setEN={setEN} />
      {React.cloneElement(children, {
        EN: EN,
      })}
      <Footer EN={EN} />
    </div>
  );
};

export default Layout;
