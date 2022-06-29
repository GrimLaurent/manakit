import "../../assets/scss/global.scss";
import React, { Fragment, FunctionComponent } from "react";
import { hydrate } from "ReactDOM";
import ManakitType from "./types/Manakit.types";

const isSSR = () => typeof window === "undefined";

const ManaKit: FunctionComponent<ManakitType> = ({ children }) => {
  // if (typeof window === "undefined") {
  //   return null;
  // } // fix hydratation

  return !isSSR() && children;
};

export default ManaKit;
