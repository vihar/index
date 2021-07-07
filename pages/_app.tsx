// next imports
import App from "next/app";
import Head from "next/head";
// next seo
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
// app css
import "../styles/globals.scss";
// axios config
import "config/axios";
// components
import ToastAlert from "@components/alert";
// context provider
import { GlobalContextProvider } from "@contexts/global";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <DefaultSeo {...SEO} />
        <GlobalContextProvider>
          <ToastAlert />
          <Component {...pageProps} />
        </GlobalContextProvider>
      </>
    );
  }
}

export default MyApp;
