import Header from "../components/Home/Header";
import Gallery from "../components/Home/Gallery";
import NewCollection from "../components/Home/NewCollection";
import About from "../components/Home/About";
import ContactForm from "../components/Contact/ContactForm";

import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { ReactElement } from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rachel Hancock Artist</title>
        <meta name="description" content="Artist Rachel Hancock focuses on the blending of landscape and memory." />
      </Head>

      <Header />
      <Gallery />
      <NewCollection />
      <About />
      <ContactForm />
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};