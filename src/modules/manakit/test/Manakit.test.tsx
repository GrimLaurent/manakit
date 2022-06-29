import React from "react";
import { render, screen } from "@testing-library/react";
import Manakit from "../Manakit.module";

// Doc à lire pour la suite https://jestjs.io/fr/docs/tutorial-react

describe("structure Manakit", () => {
  const props = {
    noControl: false,
    children: `<>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div> Demo </iv>
    </>`,
  };

  test("render default Manakit", () => {
    render(<Manakit {...props} />);
  });
});
