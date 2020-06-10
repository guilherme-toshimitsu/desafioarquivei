import React from "react";
import Button from "../";
import { renderWithTheme } from "@commons/themeTests";

describe("<Button />", () => {
  it("creates a Button component", () => {
    const wrapper = renderWithTheme(<Button />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
