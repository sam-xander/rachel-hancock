import Link from 'next/link'

export default function About() {
  return (
    <div className="relative bg-[#8D6F57]">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover invert opacity"
          src="/DSC_0032_crop.png"
          alt=""
        />
        <div
          className="absolute inset-0 bg-[#8D6F57]/90"
          aria-hidden="true"
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-16 px-6 sm:py-32 sm:px-12 lg:px-8">
        <h1 className="text-4xl tracking-tight text-[#f6f6f6] sm:text-5xl lg:text-6xl">
          About the Artist
        </h1>
        <p className="mt-2 max-w-3xl text-lg text-[#f6f6f6]/80">
        Rachel captures the simple beauty of hidden places in our landscape.
          She finds solace in painting the places that feel like home.
        </p>
        <div className="mt-12 sm:w-full sm:max-w-md lg:mt-8 lg:ml-0 lg:flex-1">
        <Link href="/about">
        <a
          className="mt-12 inline-block tracking-widest border border-transparent bg-[#f6f6f6] py-3 px-8 text-[#2d241c] shadow-lg hover:brightness-110"
        >
          READ MORE
        </a>
        </Link>
        </div>
      </div>
    </div>
  );
}
