import Head from 'next/head'
import Layout from "../components/Layout/Layout";
import { ReactElement } from 'react'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Our Privacy Policy</title>
        <meta name="description" content="Website privacy policy page" />
      </Head>

        <h1 className="text-3xl font-bold font-open">
          Website privacy policy page content
        </h1>
    </>
  )
}

PrivacyPolicy.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
  };