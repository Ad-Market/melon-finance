import React from "react";
import Link from "next/link";
import Button from "../components/Button";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="page-container">
        <Link href="/">
          <img src="/logo.svg" />
        </Link>
        <div className="nav">
          <Link href="#">Products</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Blog</Link>
          <Button primary>Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
