import ImageLinks from "../components/Gallery/ImageLinks";

import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { ReactElement } from "react";

export default function Collections() {
  return (
    <>
      <Head>
        <title>Collections</title>
        <meta name="description" content="Website privacy policy page" />
      </Head>
      <ImageLinks />
    </>
  );
}

Collections.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
