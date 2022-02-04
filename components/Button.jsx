import React from "react";
import clsx from "clsx";

const Button = ({ primary, title, lg, noShadow, children, ...rest }) => {
  return (
    <button
      className={clsx(
        "btn",
        { "btn-primary": primary },
        { "no-shadow": noShadow },
        { lg }
      )}
      {...rest}
    >
      {title || children}
    </button>
  );
};

export default Button;
