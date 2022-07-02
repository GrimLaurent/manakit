import React from "react";
import { render } from "@testing-library/react";
import Manakit from "../Manakit.module";

describe("structure Manakit", () => {
  const props = {
    children: `<>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </>`,
  };

  test("test import props", () => {
    render(<Manakit {...props} />);
  });
});
