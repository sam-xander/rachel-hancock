import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    link: "",
    imagesrc: "/falmouth.png",
    imagealt: "Prints",
    title: "2022 COLLECTION",
  },
  {
    link: "",
    imagesrc: "/home.png",
    imagealt: "Prints",
    title: "2021 COLLECTION",
  },
  {
    link: "",
    imagesrc: "/penlee-point.png",
    imagealt: "Prints",
    title: "Prints",
  },
  {
    link: "",
    imagesrc: "/etchings/daffens-wood-etching.jpeg",
    imagealt: "Etchings",
    title: "Etchings",
  },
];

export default function ImageLinks() {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        {collections.map((collection) => (
          <Link
            href={collection.link}
            key={collection.title}
            className="relative flex overflow-hidden mx-0 md:mx-4 mb-0 md:mb-4 group"
          >
            <Image
              src={collection.imagesrc}
              alt={collection.imagealt}
              className="h-full w-full object-cover object-center"
              fill
            />
            <div className="relative h-60 md:h-80 flex w-full flex-col items-center justify-center bg-[#2d241c]/40 group-hover:bg-[#2d241c]/25">
              <h1 className="tracking-widest uppercase text-[#f6f6f6]/95 text-4xl md:text-5xl">
                {collection.title}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
