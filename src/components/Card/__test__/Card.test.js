import React from "react";
import Card from "..";
import { renderWithTheme } from "@commons/themeTests";

describe("<Card />", () => {
  it("creates a Button component", () => {
    const wrapper = renderWithTheme(<Card />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
