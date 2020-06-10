import React from "react";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import * as Redux from "react-redux";
import thunk from "redux-thunk";
import theme from "./theme";
import store from "@store";

const renderWithTheme = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

const renderWithThemeAndRedux = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      <Redux.Provider store={store}>{children}</Redux.Provider>
    </ThemeProvider>
  );
};

export { renderWithTheme, renderWithThemeAndRedux };
