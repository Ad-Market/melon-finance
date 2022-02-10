import React, { useRef, useEffect, useState } from "react";
import clsx from "clsx";
import $ from "jquery";

const Accordion = ({ defaultActive, title, children }) => {
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
    <div className={clsx("accordion-item", { active: accordionActive })}>
      <div className="accordion-item-head" onClick={toggleAccordionState}>
        <h5 className="text-white">{title}</h5>
      </div>
      <div ref={accordionContentRef} className={clsx("accordion-item-body")}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
