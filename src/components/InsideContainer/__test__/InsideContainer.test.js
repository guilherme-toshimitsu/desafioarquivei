import React from "react";
import InsideContainer from "../";
import { renderWithTheme } from "@commons/themeTests";

describe("<InsideContainer />", () => {
  it("creates a InsideContainer component", () => {
    const wrapper = renderWithTheme(<InsideContainer />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
