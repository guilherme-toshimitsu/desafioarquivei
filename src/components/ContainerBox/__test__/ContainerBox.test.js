import React from "react";
import ContainerBox from "../";
import { renderWithTheme } from "@commons/themeTests";

describe("<ContainerBox />", () => {
  it("creates a ContainerBox component", () => {
    const wrapper = renderWithTheme(<ContainerBox />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
