import ImageLinks from "../components/Collections/ImageLinks";

import Head from 'next/head'
import Layout from "../components/Layout/Layout";
import { ReactElement } from 'react'

export default function Collections() {
  return (
    <>
      <Head>
        <title>Collections | Rachel Hancock</title>
        <meta name="description" content="Website privacy policy page" />
      </Head>
      <ImageLinks />
    </>
  );
}

Collections.getLayout = function getLayout(page:ReactElement){
  return <Layout>{page}</Layout>
}