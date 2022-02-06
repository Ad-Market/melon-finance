import React from "react";
import clsx from "clsx";

const Button = ({
  primary,
  secondary,
  transparent,
  title,
  lg,
  xlg,
  noShadow,
  children,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        "btn",
        { "btn-primary": primary },
        { "btn-secondary": secondary },
        { transparent },
        { "no-shadow": noShadow },
        { lg },
        { xlg }
      )}
      {...rest}
    >
      {title || children}
    </button>
  );
};

export default Button;
