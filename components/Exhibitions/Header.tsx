import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="lg:relative">
      <div className="mx-auto w-full max-w-7xl py-28 text-center lg:py-36 lg:text-left">
        <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
          <p className="text-md tracking-wider pb-2 font-light">
            NOV 16TH - DEC 4TH 2022
          </p>
          <h3 className="text-4xl md:text-5xl uppercase font-light tracking-widest opacity-95 pb-2">
            AMONG THE LIVING
          </h3>
          <p className="mt-4 text-lg md:text-xl tracking-wide opacity-80 font-light">
            Rachel&apos;s new collection exhibited in The Garrison Gallery in
            Rame.
          </p>
          <Link
            href="https://www.instagram.com/p/CkrxS7-o3pC/"
            className="mt-12 inline-block tracking-widest border border-transparent py-3 px-8 text-[#f6f6f6] shadow-lg hover:brightness-110 bg-[#8D6F57]"
          >
            MORE INFO
          </Link>
        </div>
      </div>
      <div className="relative h-96 w-full md:h-[36rem] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
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
