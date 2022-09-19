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
          Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
          lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
          consectetur. Sit justo viverra non adipisicing elit distinctio.
        </p>
        <div className="mt-12 sm:w-full sm:max-w-md lg:mt-8 lg:ml-0 lg:flex-1">
          <a
            href="https://www.google.co.uk/forms/about"
            className="inline-block border border-transparent bg-[#f6f6f6] py-3 px-8 text-[#8D6F57] hover:brightness-110"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
}
