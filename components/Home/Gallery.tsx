import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute hidden h-full w-1/2 bg-[#f6f6f6] lg:block"
      />
      <div className="relative bg-[#f6f6f6] lg:bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-32 lg:max-w-none lg:py-64">
            <div className="lg:pr-16">
              <h1 className="tracking-tight text-5xl lg:text-7xl opacity-80">
                Gallery
              </h1>
              <p className="mt-4 text-lg sm:text-xl tracking-wider opacity-75">
                Explore the online gallery, view the artwork and find out how to
                purchase.
              </p>
              <Link
                href="/gallery"
                className="mt-12 inline-block tracking-widest border border-transparent py-3 px-8 text-[#f6f6f6] shadow-lg hover:brightness-110 bg-[#8D6F57]"
              >
                VIEW ARTWORK
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen sm:h-96 w-full lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2">
        <Image
          src="/st-ives-mockup.png"
          alt=""
          className="h-full w-full object-cover object-center"
          fill
        />
      </div>
    </div>
  );
}
