import React from "react";
import clsx from "clsx";
const GridContainer = ({ className, children }) => {
  return (
    <div className="container-fluid px-0">
      <div className={clsx("row", className)}>{children}</div>
    </div>
  );
};

export default GridContainer;
