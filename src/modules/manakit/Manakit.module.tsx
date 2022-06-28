import "../../assets/scss/global.scss";
import React, { Fragment, FunctionComponent } from "react";
import { hydrate } from "ReactDOM";
import ManakitType from "./types/Manakit.types";

const ManaKit: FunctionComponent<ManakitType> = ({ children, ...props }) => {
  if (typeof window === "undefined") {
    return null;
  } // fix hydratation

  return <Fragment>{children}</Fragment>;
};

export default hydrate(ManaKit);
