import Link from "next/link";

const collections = [
  {
    link: "/collection/prints",
    imagesrc: "/DSC_0032_crop.png",
    imagealt: "",
    subtitle: "",
    title: "High Quality Prints",
  },
  {
    link: "/collections/etchings",
    imagesrc: "/DSC_0032_crop.png",
    imagealt: "",
    subtitle: "",
    title: "Traditional Style Etchings",
  },
];

export default function ImageLinks() {
  return (
    <>
      <div className="min-h-full">
        {collections.map((collection) => (
          <Link href={collection.link}>
            <a>
              <div className="relative flex">
                <img
                  src={collection.imagesrc}
                  alt={collection.imagealt}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="relative h-[34rem] flex w-full flex-col items-start justify-end bg-[#2d241c]/60 p-8 sm:p-12">
                  <p className="text-lg text-white text-opacity-75">
                    {collection.subtitle}
                  </p>
                  <h1 className="tracking-tight text-[#f6f6f6]/95 text-4xl sm:text-5xl md:text-6xl">
                    {collection.title}
                  </h1>
                  <a
                    href={collection.link}
                    className="mt-12 inline-block tracking-widest border border-transparent bg-[#f6f6f6] py-3 px-8 text-[#2d241c] hover:brightness-110"
                  >
                    VIEW COLLECTION
                  </a>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}
