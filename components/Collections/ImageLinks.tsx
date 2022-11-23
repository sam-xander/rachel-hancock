import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    link: "/collection/prints",
    imagesrc: "/penlee-point.png",
    imagealt: "Prints",
    title: "Prints",
  },
  {
    link: "/collections/etchings",
    imagesrc: "/etchings/daffens-wood-etching.jpeg",
    imagealt: "Etchings",
    title: "Etchings",
  },
];

export default function ImageLinks() {
  return (
    <>
      <div className="min-h-full">
        {collections.map((collection) => (
          <div key={collection.title} className="relative flex">
            <Image
              src={collection.imagesrc}
              alt={collection.imagealt}
              className="absolute inset-0 h-full w-full object-cover object-center"
              fill
            />
            <div className="relative h-[30rem] flex w-full flex-col items-center justify-center bg-[#2d241c]/70 p-8 sm:p-12">
              <h1 className="tracking-tight text-[#f6f6f6]/95 text-5xl lg:text-7xl">
                {collection.title}
              </h1>
              <Link
                href={collection.link}
                className="mt-12 inline-block tracking-widest border border-transparent bg-[#f6f6f6] py-3 px-8 text-[#2d241c] shadow-lg hover:brightness-110"
              >
                VIEW COLLECTION
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
