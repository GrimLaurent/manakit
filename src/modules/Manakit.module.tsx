import "../assets/scss/global.scss";
import React, { FunctionComponent } from "react";

const ManaKit: FunctionComponent<any> = ({ ...props }) => {
  console.log("MANAKIT =>", props);
  return (
    <>
      <body>ManaKit Developement</body>
    </>
  );
};

export default ManaKit;
