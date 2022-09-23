export default function Header() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden image-fader">
        <img
          src="penlee-point.png"
          alt="Heading image"
          className="h-full w-full object-cover object-center"
        />
        <img
          src="home.png"
          alt="Heading image"
          className="h-full w-full object-cover object-center"
        />
        <img
          src="shaugh-prior.png"
          alt="Heading image"
          className="h-full w-full object-cover object-center"
        />
        <img
          src="st-ives.png"
          alt="Heading image"
          className="h-full w-full object-cover object-center"
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
        <p className="mt-4 text-lg sm:text-xl tracking-wider text-white/80">
          
        </p>
        <a
          href="https://www.etsy.com/uk/shop/UnfurledStudio"
          className="mt-12 inline-block tracking-widest border border-transparent bg-[#f6f6f6] py-3 px-8 text-[#2d241c] shadow-lg hover:brightness-110"
        >
          SHOP NOW
        </a>
      </div>
    </div>
  );
}
