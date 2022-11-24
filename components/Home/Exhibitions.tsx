import Image from "next/image";
import Link from "next/link";

export default function Exhibitions() {
  return (
    <div className="lg:relative">
      <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-36 lg:text-left">
        <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
          <h3 className="text-4xl md:text-5xl uppercase font-medium tracking-widest opacity-95">
            EXHIBITIONS
          </h3>
          <p className="mt-4 text-lg md:text-xl tracking-wide opacity-80 font-light">
            Explore the latest showings of Rachel&apos;s work.
          </p>
          <Link
            href="/exhibitions"
            className="mt-12 inline-block tracking-widest border border-transparent py-3 px-8 text-[#f6f6f6] shadow-lg hover:brightness-110 bg-[#8D6F57]"
          >
            VIEW SHOWS
          </Link>
        </div>
      </div>
      <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
        <Image
          src="/st-ives-mockup.png"
          alt=""
          fill
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
