import React from "react";
import clsx from "clsx";
import $ from "jquery";

import Button from "./Button";
import GridContainer from "./GridContainer";

const Tabs = ({ tabGroup, tabs }) => {
  const toggleTab = (e) => {
    $(`.tabs-container[data-tab-group='${tabGroup}'] .tab`).removeClass(
      "active"
    );
    $(e.currentTarget).addClass("active");

    console.log($(e.currentTarget).attr("data-target"));

    $(`.tab-content[data-tab-group='${tabGroup}']`).fadeOut();
    $(
      `.tab-content[data-tab-group='${tabGroup}'][data-tab-target=${$(
        e.currentTarget
      ).attr("data-target")}]`
    ).fadeIn();
  };

  return (
    <div data-tab-group={tabGroup} className="tabs-container">
      <div className="tabs-main">
        <GridContainer shortSpacing>
          {tabs.map((el, idx) => {
            const { title, target, active } = el;

            return (
              <div className="col" key={"tab" + idx}>
                <div
                  data-target={target}
                  onClick={toggleTab}
                  className={clsx("tab", { active })}
                >
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
