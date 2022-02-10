import React, { useRef } from "react";
import clsx from "clsx";
import $ from "jquery";

import NavLink from "../components/NavLink";
import Button from "../components/Button";
import GridContainer from "./GridContainer";

const Navbar = ({ buttonTitle }) => {
  const navRef = useRef(null);

  const toggleNav = () => {
    $(navRef.current).slideToggle();
  };

  return (
    <nav id="navbar">
      <GridContainer>
        <div className="col">
          <div className="page-container">
            <NavLink href="/">
              <img className="logo" src="/logo.svg" />
            </NavLink>
            <button onClick={toggleNav} className="btn d-lg-none d-block">
              <img src="/hamburger.svg" alt="hamburger" />
            </button>
            <div ref={navRef} className={clsx("nav")}>
              <NavLink href="/products">Products</NavLink>
              <NavLink href="/about-us">About Us</NavLink>
              <NavLink href="#">FAQ</NavLink>
              <NavLink href="#">Blog</NavLink>
              <Button primary>{buttonTitle || "Get Started"}</Button>
            </div>
          </div>
        </div>
      </GridContainer>
    </nav>
  );
};

export default Navbar;
