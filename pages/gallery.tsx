import ImageGallery from "../components/Gallery/ImageGallery";

import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { ReactElement } from "react";

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Our Privacy Policy</title>
        <meta name="description" content="Website privacy policy page" />
      </Head>
      <ImageGallery />
    </>
  );
}

Gallery.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
