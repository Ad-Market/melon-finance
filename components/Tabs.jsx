import React from "react";
import clsx from "clsx";

import Button from "./Button";
import GridContainer from "./GridContainer";

const Tabs = ({ tabs }) => {
  return (
    <div className="tabs-container">
      <div className="tabs-main">
        <GridContainer>
          {tabs.map((el, idx) => {
            const { title, active } = el;

            return (
              <div className="col" key={"tab" + idx}>
                <div className={clsx("tab", { active })}>
                  <Button noShadow primary>
                    {title}
                  </Button>
                </div>
              </div>
            );
          })}
        </GridContainer>
      </div>
    </div>
  );
};

export default Tabs;
