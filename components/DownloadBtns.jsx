import React from "react";
import clsx from "clsx";

const DownloadBtns = ({ className, withRatings }) => {
  return (
    <div className={clsx("download-btns", className)}>
      <div>
        <button className="btn">
          <img src="/download-app-store.svg" alt="app-store" />
        </button>
        {withRatings && (
          <div className="ratings">
            <img src="/rating-star-fill.svg" alt="star-fill" />
            <strong>4.5 </strong> on App Store
          </div>
        )}
      </div>
      <div>
        <button className="btn">
          <img src="/download-play-store.svg" alt="play-store" />
        </button>
        {withRatings && (
          <div className="ratings">
            <img src="/rating-star-fill.svg" alt="star-fill" />
            <strong>5.0 </strong> on PlayStore
          </div>
        )}
      </div>
    </div>
  );
};

export default DownloadBtns;
