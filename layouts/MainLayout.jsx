import React from "react";
import Link from "next/link";
import clsx from "clsx";

import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Button from "../components/Button";
import GridContainer from "../components/GridContainer";
import SocialLinks from "../components/SocialLinks";

const MainLayout = ({ id, noNav, noGrads, noFoot, children }) => {
  return (
    <>
      {!noNav && <Navbar />}
      <main id={id} className={clsx({ "pt-5": noNav })}>
        {!noGrads && (
          <>
            <div className="yellow-gradient" />
            <div className="yellow-gradient-2" />
            <div className="blue-gradient" />
            <div className="blue-gradient-2" />
            <div className="blue-gradient-3" />
          </>
        )}

        {children}

        {!noFoot && (
          <>
            <Section className="lg">
              <div className="get-started">
                <div className="main text-center">
                  <h2 className="text-center mb-3">
                    The most trusted crypto-native finance platform
                  </h2>
                  <p className="lh-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur venenatis dapibus quam id. Urna sit.
                  </p>

                  <img src="/trusted-platform.svg" alt="trusted" />

                  <div className="mt-4 pt-3">
                    <Button xlg primary>
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            </Section>

            <Section className="lg">
              <div className="newsletter lg d-flex align-items-center">
                <h4 className="me-4 pe-3 fw-medium fw-500">Stay up to date</h4>
                <div className="flex-grow-1">
                  <input type="email" placeholder="Enter your email" />
                  <Button secondary noShadow>
                    Subscribe
                  </Button>
                </div>
              </div>
            </Section>

            <footer id="footer">
              <div className="page-container">
                <div className="footer-main">
                  <GridContainer>
                    <div className="left">
                      <img src="/logo-dark.svg" alt="logo-dark" />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Consectetur venenatis.
                      </p>

                      <SocialLinks className="justify-content-start" inverted />

                      <div className="copyright">
                        © 2022 Melon Financials | All Rights Reserved
                      </div>
                    </div>
                    <div className="right">
                      <div className="links">
                        <h6>Company</h6>

                        <div className="links-main">
                          <Link href="#">About</Link>
                          <Link href="#">Career</Link>
                          <Link href="#">Product</Link>
                          <Link href="#">FAQ</Link>
                          <Link href="#">Blog</Link>
                        </div>
                      </div>
                      <div className="links">
                        <h6>Retail</h6>

                        <div className="links-main">
                          <Link href="#">Crypto Custody</Link>
                          <Link href="#">Credit Cards</Link>
                          <Link href="#">Gift Cards</Link>
                          <Link href="#">Seed Investment</Link>
                          <Link href="#">Partners</Link>
                        </div>
                      </div>
                      <div className="links">
                        <h6>Enterprise</h6>

                        <div className="links-main">
                          <Link href="#">Term Based Transaction Service</Link>
                          <Link href="#">Commercial Credit</Link>
                          <Link href="#">Powering Loyalthy</Link>
                          <Link href="#">Digital Asset Payments</Link>
                          <Link href="#">Crypto Rewards</Link>
                        </div>
                      </div>
                      <div className="links">
                        <h6>Legal</h6>

                        <div className="links-main">
                          <Link href="#">Terms of Use</Link>
                          <Link href="#">Privacy Policy</Link>
                          <Link href="#">Licenses &amp; Disclosures</Link>
                          <Link href="#">Licenses &amp; Disclosures</Link>
                          <Link href="#">Cardholder Agreement</Link>
                          <Link href="#">E-Sign Consent</Link>
                        </div>
                      </div>
                    </div>
                  </GridContainer>
                </div>
              </div>
            </footer>
          </>
        )}
      </main>
    </>
  );
};

export default MainLayout;
