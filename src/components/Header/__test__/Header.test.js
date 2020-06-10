import React from "react";
import Header from "..";
import { renderWithThemeAndRedux } from "@commons/themeTests";

describe("<Header />", () => {
  it("creates a Header component", () => {
    const wrapper = renderWithThemeAndRedux(<Header />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
