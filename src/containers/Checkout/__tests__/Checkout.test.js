import React, { useEffect } from "react";
import Checkout from "../";
import { renderWithThemeAndRedux, renderWithTheme } from "@commons/themeTests";
import { useSelector, useDispatch } from "react-redux";
import {
  fireEvent,
  waitForElement,
  cleanup,
  wait,
} from "@testing-library/react";
import envConfig from "@config";
import { actions } from "../../../redux/Consult";

describe("<Checkout />", () => {
  const oldConfig = envConfig;

  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  afterEach(() => {
    envConfig.api = oldConfig.api;
  });

  it("creates a Checkout component without the load from Consult", () => {
    const wrapper = renderWithThemeAndRedux(<Checkout />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  it("creates a Checkout component, after consults are loaded", async () => {
    envConfig.api.mock = true;

    const WrapperDispatch = () => {
      const dispatch = useDispatch();

      useEffect(() => {
        dispatch(actions.sendPriceAmmount(9, 100));
      }, []);

      return <></>;
    };

    const component = renderWithThemeAndRedux(
      <>
        <WrapperDispatch />
        <Checkout />
      </>
    );

    await waitForElement(() => component.getByTestId("true-loaded"));
    expect(component.asFragment()).toMatchSnapshot();
  });
});
