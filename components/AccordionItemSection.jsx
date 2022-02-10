import React, { useRef, useEffect, useState } from "react";
import clsx from "clsx";
import $ from "jquery";

const AccordionItemSection = ({ defaultActive, title, children }) => {
  const [accordionActive, setAccordionActive] = useState(
    defaultActive || false
  );
  const accordionContentRef = useRef(null);

  const toggleAccordionState = () => {
    setAccordionActive((prevState) => !prevState);
  };

  useEffect(() => {
    if (accordionActive) {
      $(accordionContentRef.current).slideDown();
    } else {
      $(accordionContentRef.current).slideUp();
    }
  }, [accordionActive]);

  return (
    <div
      className={clsx("accordion-item-section", { active: accordionActive })}
    >
      <h6
        className="accordion-item-section-title"
        onClick={toggleAccordionState}
      >
        {title}
      </h6>
      <div ref={accordionContentRef} className="accordion-item-section-body">
        {children}
      </div>
    </div>
  );
};

export default AccordionItemSection;
