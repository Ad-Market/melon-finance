import React from "react";

const Section = ({ children, ...rest }) => {
  return (
    <section {...rest}>
      <div className="page-container">{children}</div>
    </section>
  );
};

export default Section;
