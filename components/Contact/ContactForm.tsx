export default function ContactForm() {
  return (
    <div className="relative">
      <div className="bg-[#556973]/90 py-16 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:py-20 lg:px-20">
        <div className="lg:w-0 lg:ml-16 lg:flex-1">
          <h1 className="text-3xl tracking-tight text-white">
            Any Questions? Get in Touch
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-[#f6f6f6]/80">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            Lorem cupidatat commodo. Elit sunt amet fugiat.
          </p>
        </div>
        <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
          <a
            href="https://www.google.co.uk/forms/about"
            className="inline-block border border-transparent bg-[#f6f6f6] py-3 px-8 text-[#556973] hover:brightness-110"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </div>
  );
}
