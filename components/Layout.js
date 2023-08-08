import { useState } from "react";
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [EN, setEN] = useState(true);
  return (
    <div className="container">
      <Navbar EN={EN} setEN={setEN} />
      {React.cloneElement(children, {
        EN: EN,
      })}
    </div>
  );
};

export default Layout;
