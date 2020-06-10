import React from "react";
import Loading from "../";
import { renderWithTheme } from "@commons/themeTests";

describe("<Loading />", () => {
  it("creates a Loading component", () => {
    const wrapper = renderWithTheme(<Loading />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
