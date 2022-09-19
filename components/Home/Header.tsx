export default function Header() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <img
          src="DSC_0032_crop.png"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#2d241c] opacity-60"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 sm:py-52 px-6 text-center sm:py-30 lg:px-0">
        <h1 className="tracking-tight text-[#f6f6f6] text-4xl sm:text-5xl lg:text-7xl">
          Main Heading
        </h1>
        <p className="mt-4 text-lg sm:text-xl tracking-wider text-white/80">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            Lorem cupidatat commodo. Elit sunt amet fugiat.
        </p>
        <a
          href="https://www.etsy.com/uk/shop/UnfurledStudio" target="_blank"
          className="mt-12 inline-block tracking-widest border border-transparent bg-[#f6f6f6] py-3 px-8 text-[#2d241c] hover:brightness-110"
        >
          SHOP ARTWORK
        </a>
      </div>
    </div>
  );
}
