import Header from "../components/Home/Header";
import Collections from "../components/Home/Collections";
import About from "../components/Home/About";
import ContactForm from "../components/Contact/ContactForm";

import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { ReactElement } from "react";
import Exhibitions from "../components/Home/Exhibitions";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rachel Hancock Artist</title>
        <meta
          name="description"
          content="Rachel Hancock is an oil painter based in South West, England."
        />
      </Head>

      <Header />
      <Exhibitions />
      <Collections />
      <About />
      <ContactForm />
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
