import React, { useRef } from "react";
import clsx from "clsx";
import $ from "jquery";
import Link from "next/link";
import Button from "../components/Button";
import GridContainer from "./GridContainer";

const Navbar = ({ buttonTitle }) => {
  // const [navbarActiveState, setNavbarActiveState] = useState(false);
  const navRef = useRef(null);

  const toggleNav = () => {
    $(navRef.current).slideToggle();
  };

  return (
    <nav id="navbar">
      <GridContainer>
        <div className="col">
          <div className="page-container">
            <Link href="/">
              <img className="logo" src="/logo.svg" />
            </Link>
            <button onClick={toggleNav} className="btn d-lg-none d-block">
              <img src="/hamburger.svg" alt="hamburger" />
            </button>
            <div ref={navRef} className={clsx("nav")}>
              <Link href="/products">Products</Link>
              <Link href="/about-us">About Us</Link>
              <Link href="#">FAQ</Link>
              <Link href="#">Blog</Link>
              <Button primary>{buttonTitle || "Get Started"}</Button>
            </div>
          </div>
        </div>
      </GridContainer>
    </nav>
  );
};

export default Navbar;
