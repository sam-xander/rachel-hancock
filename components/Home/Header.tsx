import Image from "next/image";
import imageFour from "../../public/penlee-point.png";
import imageThree from "../../public/home.png";
import imageTwo from "../../public/shaugh-prior.png";
import imageOne from "../../public/st-ives.png";
import Link from "next/link";

export default function Header() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden image-fader"
      >
        <Image
          src={imageFour}
          alt="Heading image"
          className="h-full w-full object-cover object-center"
          width={2746}
          height={3636}
        />
        <Image
          src={imageThree}
          alt="Heading image"
          className="h-full w-full object-cover object-center"
          width={5207}
          height={3478}
        />
        <Image
          src={imageTwo}
          alt="Heading image"
          className="h-full w-full object-cover object-center"
          width={3431}
          height={3428}
        />
        <Image
          src={imageOne}
          alt="Heading image"
          className="h-full w-full object-cover object-center"
          fill
          priority
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#2d241c] opacity-40"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 sm:py-52 px-6 text-center sm:py-30 lg:px-0">
        <h1 className="tracking-tight text-[#f6f6f6]/90 text-5xl lg:text-7xl">
          Oil Paintings
        </h1>
        <p className="mt-4 text-lg sm:text-xl tracking-wider text-white/80"></p>
        <Link
          href="https://www.etsy.com/uk/shop/UnfurledStudio"
          className="mt-12 inline-block tracking-widest border border-transparent bg-[#f6f6f6] py-3 px-8 text-[#8d6f57] shadow-lg hover:brightness-110"
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
}
