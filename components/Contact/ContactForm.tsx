import Link from "next/link";

export default function ContactForm() {
  return (
    <div className="relative">
      <div className="bg-[#556973]/90 py-16 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:py-20 lg:px-20">
        <div className="lg:w-0 lg:ml-16 lg:flex-1">
          <h1 className="text-3xl text-white font-light uppercase tracking-widest">
            Any Questions?
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-[#f6f6f6]/80 tracking-wide font-light">
            Please reach out with any questions. Select &apos;get in touch&apos;
            to fill out the form and once submitted I&apos;ll be able to get
            back to you as soon as possible.
          </p>
        </div>
        <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
          <Link
            href="https://forms.gle/zYxRF5KYfSJ7C1pi6"
            className="mt-12 inline-block tracking-widest border border-transparent bg-[#f6f6f6] py-3 px-8 text-[#556973] shadow-lg hover:brightness-110"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </div>
  );
}
