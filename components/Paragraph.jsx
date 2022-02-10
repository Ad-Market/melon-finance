import React from "react";
import clsx from "clsx";

const Paragraph = ({ lg, className, rest, children }) => {
  return (
    <p className={clsx({ lg }, className)} {...rest}>
      {children}
    </p>
  );
};

export default Paragraph;
