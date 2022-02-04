import React from "react";
import Navbar from "../components/Navbar";

const MainLayout = ({ id, children }) => {
  return (
    <>
      <Navbar />
      <main id={id}>
        <div className="yellow-gradient"></div>
        <div className="blue-gradient"></div>
        {children}
      </main>
    </>
  );
};

export default MainLayout;
