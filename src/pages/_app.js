// pages/_app.js
import '../../public/styles/globals.css';
import React, { useEffect } from "react";
import Head from "next/head";
import Layout from '../pages/layout'
import { NextUIProvider } from "@nextui-org/react";

const MyApp = ({ Component, pageProps }) => {
  // Esta función permite a los componentes definir su propio layout si lo desean
  const getLayout =
    Component.getLayout ||
    ((page) => <Layout>{page}</Layout>);

  return (
    <NextUIProvider>
      <Head>
        <title>Josue-R3</title>
        <link rel="icon" href="/images/logos/favicon.svg" type='image/svg+xml' />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </NextUIProvider>
  );
};

export default MyApp;
