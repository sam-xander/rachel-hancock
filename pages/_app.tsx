import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next/types";
import Head from "next/head";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link key="icon" rel="icon" href="/favicon.ico" />

        <title>Rachel Hancock Artist</title>
        <meta
          name="description"
          content="Artist Rachel Hancock focuses on the blending of landscape and memory."
        />
      </Head>
      {getLayout(
        <main className="screen">
          <Component {...pageProps} />
        </main>
      )}
    </>
  );
}
