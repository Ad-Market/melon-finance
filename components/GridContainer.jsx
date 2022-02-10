import React from "react";
import clsx from "clsx";
const GridContainer = ({ className, shortSpacing, children }) => {
  return (
    <div className="container-fluid px-0">
      <div className={clsx("row", { "gx-md-5": !shortSpacing }, className)}>
        {children}
      </div>
    </div>
  );
};

export default GridContainer;
