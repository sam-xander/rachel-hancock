/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";
import Layout from "../../components/Layout/Layout";
import { getAllCollectionIds, getCollectionData } from "../../lib/collections";

export default function Collection({ collectionData }) {
  return (
    <>
      <Head>
        <title>{collectionData.title}</title>
      </Head>
      <div className="max-w-2xl mx-auto">
        {collectionData.src1 ? (
          <>
            {collectionData.src1 && (
              <>
                <div className="relative flex overflow-hidden pb-2 mt-8">
                  <img
                    src={collectionData.src1}
                    alt={collectionData.img1}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex pb-12">
                  <h3 className="text-sm px-2 uppercase tracking-widest">
                    {`'${collectionData.img1}' `}
                  </h3>
                </div>
              </>
            )}
            {collectionData.src2 && (
              <>
                <div className="relative flex overflow-hidden pb-2">
                  <img
                    src={collectionData.src2}
                    alt={collectionData.img2}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex pb-12">
                  <h3 className="text-sm px-2 uppercase tracking-widest">
                    {`'${collectionData.img2}' `}
                  </h3>
                </div>
              </>
            )}
            {collectionData.src3 && (
              <>
                <div className="relative flex overflow-hidden pb-2">
                  <img
                    src={collectionData.src3}
                    alt={collectionData.img3}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex pb-12">
                  <h3 className="text-sm px-2 uppercase tracking-widest">
                    {`'${collectionData.img3}' `}
                  </h3>
                </div>
              </>
            )}
            {collectionData.src4 && (
              <>
                <div className="relative flex overflow-hidden pb-2">
                  <img
                    src={collectionData.src4}
                    alt={collectionData.img4}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex pb-12">
                  <h3 className="text-sm px-2 uppercase tracking-widest">
                    {`'${collectionData.img4}' `}
                  </h3>
                </div>
              </>
            )}
            {collectionData.src5 && (
              <>
                <div className="relative flex overflow-hidden pb-2">
                  <img
                    src={collectionData.src5}
                    alt={collectionData.img5}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex pb-12">
                  <h3 className="text-sm px-2 uppercase tracking-widest">
                    {`'${collectionData.img5}' `}
                  </h3>
                </div>
              </>
            )}
            {collectionData.src6 && (
              <>
                <div className="relative flex overflow-hidden pb-2">
                  <img
                    src={collectionData.src6}
                    alt={collectionData.img6}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex pb-12">
                  <h3 className="text-sm px-2 uppercase tracking-widest">
                    {`'${collectionData.img6}' `}
                  </h3>
                </div>
              </>
            )}
            {collectionData.src7 && (
              <>
                <div className="relative flex overflow-hidden pb-2">
                  <img
                    src={collectionData.src7}
                    alt={collectionData.img7}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex pb-12">
                  <h3 className="text-sm px-2 uppercase tracking-widest">
                    {`'${collectionData.img7}' `}
                  </h3>
                </div>
              </>
            )}
            {collectionData.src8 && (
              <>
                <div className="relative flex overflow-hidden pb-2">
                  <img
                    src={collectionData.src8}
                    alt={collectionData.img8}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex pb-12">
                  <h3 className="text-sm px-2 uppercase tracking-widest">
                    {`'${collectionData.img8}' `}
                  </h3>
                </div>
              </>
            )}
          </>
        ) : (
          <div>
            <div className="flex justify-center uppercase font-light text-2xl">
              <h3 className="mt-20">{`${collectionData.title} Coming Soon`}</h3>
            </div>
            <div className="flex justify-center uppercase font-light">
              <Link
                href="/collections"
                className="mt-12 inline-block tracking-widest border border-transparent py-2.5 px-8 hover:brightness-110"
              >
                BACK TO COLLECTIONS
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

Collection.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export async function getStaticPaths() {
  const paths = getAllCollectionIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const collectionData = await getCollectionData(params.id);

  return {
    props: {
      collectionData,
    },
  };
}
