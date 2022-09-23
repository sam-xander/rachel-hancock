import Link from "next/link";

const products = [
  {
    id: 1,
    label: "Prints",
    href: "/collections/prints",
    imageSrc: "/penlee-point.png",
    imageAlt:
      "Penlee point oil painting",
  },
  {
    id: 2,
    label: "Etchings",
    href: "/collections/etchings",
    imageSrc: "/etchings/fern-leaves-etching.jpeg",
    imageAlt:
      "Home oil painting",
  },
];

const Images = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex items-center justify-end pb-4 pr-4">
        <Link href="/collections">
        <a
          className="whitespace-nowrap tracking-widest text-sm text-[#556973] hover:brightness-105"
        >
          VIEW ALL
          <span aria-hidden="true"> &rarr;</span>
        </a>
        </Link>
      </div>
      <div className=" grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 pb-16 sm:pb-32">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <Link href={product.href}>
              <a>
                <div className="aspect-w-5 aspect-h-3 overflow-hidden shadow-lg hover:brightness-110">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-cover object-center brightness-50"
                  />
                  <p className="absolute flex items-center justify-center text-white tracking-wider text-3xl uppercase">
                    {product.label}
                  </p>
                </div>
              </a>
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
        <div className="relative pt-16 sm:pt-32 pb-16">
          <h1 className="tracking-tight text-[#556973] text-5xl lg:text-7xl opacity-80">
            Collections
          </h1>
          <p className="mt-4 text-[#556973] text-lg sm:text-xl tracking-wider opacity-75">
            New collections, including oil paintings, prints and etchings.
          </p>
          <Link href="/collections">
            <a className="mt-12 inline-block tracking-widest border border-transparent py-3 px-8 text-[#f6f6f6] shadow-lg hover:brightness-110 bg-[#556973]">
              VIEW COLLECTIONS
            </a>
          </Link>
        </div>
      </div>
      <Images />
    </div>
  );
}
