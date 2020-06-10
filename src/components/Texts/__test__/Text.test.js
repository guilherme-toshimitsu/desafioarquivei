import React from "react";
import { Text, Title } from "../";
import { renderWithTheme } from "@commons/themeTests";

describe("<Text />", () => {
  it("creates a Text component", () => {
    const wrapper = renderWithTheme(<Text />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});

describe("<Title />", () => {
  it("creates a Title component", () => {
    const wrapper = renderWithTheme(<Title />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
