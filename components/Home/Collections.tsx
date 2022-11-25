import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    label: "2022 COLLECTION",
    href: "",
    imageSrc: "/penlee-point.png",
    imageAlt: "Penlee point oil painting",
  },
  {
    id: 3,
    label: "Prints",
    href: "",
    imageSrc: "/shaugh-prior.png",
    imageAlt: "Shaugh prior oil painting",
  },
];

const Images = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex items-center justify-end pb-4 pr-4">
        <Link
          href="/collections"
          className="whitespace-nowrap tracking-widest text-sm text-[#556973] hover:brightness-105"
        >
          VIEW ALL
          <span aria-hidden="true"> &rarr;</span>
        </Link>
      </div>
      <div className=" grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 pb-16 sm:pb-32">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <Link href={product.href}>
              <div className="aspect-w-2 aspect-h-1 overflow-hidden shadow-lg hover:brightness-110">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-cover object-center brightness-50"
                  fill
                />
                <p className="absolute flex items-center justify-center text-white tracking-wider text-3xl uppercase">
                  {product.label}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Collections() {
  return (
    <div className="relative bg-[#EAF1F2]">
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        {/* Background image and overlap */}
        <div className="relative pt-16 sm:pt-32 pb-12">
          <h1 className="tracking-tight text-[#556973] text-4xl md:text-5xl opacity-80 uppercase font-light pb-2">
            Collections
          </h1>
          <p className="mt-4 text-[#556973] text-lg sm:text-xl tracking-wider opacity-75 font-light">
            New collections, including oil paintings, prints and etchings.
          </p>
          <Link
            href="/collections"
            className="mt-12 inline-block tracking-widest border border-transparent py-3 px-8 text-[#f6f6f6] shadow-lg hover:brightness-110 bg-[#556973]"
          >
            VIEW COLLECTIONS
          </Link>
        </div>
      </div>
      <Images />
    </div>
  );
}
