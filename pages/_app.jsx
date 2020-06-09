import React from "react";
import Main from "@containers/Main";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Arquivei Desafio</title>
      </Head>
      <Main Component={Component} pageProps={pageProps} />
    </>
  );
};

export default MyApp;
