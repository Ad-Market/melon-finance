import React from "react";
import clsx from "clsx";

const SocialLinks = ({ inverted, className }) => {
  return (
    <div className={clsx("social", { inverted })}>
      {!inverted && <h5>Follow Us:</h5>}

      <div className={clsx("links mt-4", className)}>
        <a href="#">
          <img
            className="hovered"
            src="/social-instagram-hovered.svg"
            alt="instagram"
          />
          <img src="/social-instagram.svg" alt="instagram" />
        </a>
        <a href="#">
          <img
            className="hovered"
            src="/social-facebook-hovered.svg"
            alt="facebook"
          />
          <img src="/social-facebook.svg" alt="facebook" />
        </a>
        <a href="#">
          <img
            className="hovered"
            src="/social-twitter-hovered.svg"
            alt="twitter"
          />
          <img src="/social-twitter.svg" alt="twitter" />
        </a>
        <a href="#">
          <img
            className="hovered"
            src="/social-tiktok-hovered.svg"
            alt="tiktok"
          />
          <img src="/social-tiktok.svg" alt="tiktok" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
