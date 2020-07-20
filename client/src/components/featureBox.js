import React from "react";
import "./featureBox.css";

const featureBox = (props) => {
  let textCss = "heading";

  if (props.heading === "Coming Soon") {
    textCss += " text-black-50";
  }

  return (
    <div className="col-lg-6">
      <div className={textCss}>{props.heading}</div>
      {props.component}
    </div>
  );
};

export default featureBox;
