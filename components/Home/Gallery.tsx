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
              <h1 className="tracking-tight text-4xl sm:text-5xl md:text-6xl">
                Enter the Gallery
              </h1>
              <p className="mt-4 text-lg opacity-90">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                Lorem cupidatat commodo. Elit sunt amet fugiat.
              </p>
              <div className="mt-8">
                <Link href="/gallery">
                  <a className="inline-block border border-transparent bg-[#8D6F57] py-3 px-8 text-[#f6f6f6] hover:brightness-110">
                    VIEW ARTWORK
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen sm:h-96 w-full lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2">
        <img
          src="/PSD_08.png"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
