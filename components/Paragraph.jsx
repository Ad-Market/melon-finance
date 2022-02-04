import React from "react";
import clsx from "clsx";

const Paragraph = ({ lg, rest, children }) => {
  return (
    <p className={clsx({ lg })} {...rest}>
      {children}
    </p>
  );
};

export default Paragraph;
