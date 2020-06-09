import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import { ThemeProvider } from "styled-components";

import ContainerBox from "@components/ContainerBox";
import Footer from "@components/Footer";
import Header from "@components/Header";
import theme from "@commons/theme";
import store from "@store";

const Main = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Header />
          <ContainerBox>
            <Component {...pageProps} />
          </ContainerBox>
          <Footer />
        </Provider>
      </ThemeProvider>
    </>
  );
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(Main);
