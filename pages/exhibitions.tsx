import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { ReactElement } from "react";
import Header from "../components/Exhibitions/Header";

export default function Exhibitions() {
  return (
    <>
      <Head>
        <title>Exhibitions</title>
        <meta name="description" content="Website privacy policy page" />
      </Head>
      <Header />
    </>
  );
}

Exhibitions.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
