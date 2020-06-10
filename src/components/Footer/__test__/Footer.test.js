import React from "react";
import Footer from "..";
import { renderWithTheme } from "@commons/themeTests";

describe("<Footer />", () => {
  it("creates a Footer component", () => {
    const wrapper = renderWithTheme(<Footer />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
