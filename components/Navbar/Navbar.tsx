import { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-50 bg-[#f6f6f6]/75 backdrop-blur-md">
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="md:text-3xl pt-6 hidden md:block uppercase tracking-widest font-light"
        >
          Rachel <span className="font-normal">Hancock</span>
        </Link>
      </div>
      <Popover className="relative">
        <div className="flex items-center justify-between pl-5 pr-7 py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <h1 className="text-xl md:hidden tracking-widest font-light uppercase">
              Rachel <span className="font-medium">Hancock</span>
            </h1>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="flex sm:inline-flex items-center justify-center sm:justify-center rounded-md focus:outline-none">
              <span className="sr-only">Open menu</span>
              <Bars2Icon className="h-8 w-8" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="hidden space-x-10 md:flex lg:translate-x-4"
          >
            <div className={router.pathname == "/" ? "font-semibold" : ""}>
              <Link href="/" className="tracking-widest">
                HOME
              </Link>
            </div>
            <div
              className={
                router.pathname == "/exhibitions" ? "font-semibold" : ""
              }
            >
              <Link href="/exhibitions" className="tracking-widest">
                EXHIBITIONS
              </Link>
            </div>
            <div
              className={
                router.pathname == "/collections" ? "font-semibold" : ""
              }
            >
              <Link href="/collections" className="tracking-widest">
                COLLECTIONS
              </Link>
            </div>
            <div className={router.pathname == "/about" ? "font-semibold" : ""}>
              <Link href="/about" className="tracking-widest">
                ABOUT
              </Link>
            </div>
          </Popover.Group>
          <div className="hidden space-x-8 pr-8 items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link
              href="https://instagram.com/rachel_paints_"
              target="_blank"
              id="social"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-instagram opacity-80"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </Link>
            <Link
              href="https://www.etsy.com/uk/shop/UnfurledStudio"
              target="_blank"
              id="shop"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                className="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </Link>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-3 transition md:hidden"
          >
            <div className="bg-[#f6f6f6] shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 py-3">
                <div className="flex items-center justify-between px-2">
                  <Link href="/">
                    <h1 className="font-light tracking-widest">
                      RACHEL <span className="font-medium">HANCOCK</span>
                    </h1>
                  </Link>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-1 gap-4 tracking-wider text-center font-light">
                  <Link href="/" className="hover:bg-[#e6e6e6]/50 py-3 px-4">
                    HOME
                  </Link>
                  <Link
                    href="/exhibitions"
                    className="hover:bg-[#e6e6e6]/50 py-3 px-4"
                  >
                    EXHIBITIONS
                  </Link>
                  <Link
                    href="/collections"
                    className="hover:bg-[#e6e6e6]/50 py-3 px-4"
                  >
                    COLLECTIONS
                  </Link>
                  <Link
                    href="/about"
                    className="hover:bg-[#e6e6e6]/50 py-3 px-4"
                  >
                    ABOUT
                  </Link>
                </div>
                <div className="mt-12">
                  <Link
                    href="https://forms.gle/zYxRF5KYfSJ7C1pi6"
                    target="_blank"
                    className="flex w-full items-center justify-center border border-transparent bg-[#8D6F57]  py-3 px-4 text-[#f6f6f6] shadow-sm hover:brightness-90"
                  >
                    GET IN TOUCH
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <Link
        href="/exhibitions"
        className="bg-[#556973]/75 text-white flex justify-center font-light text-sm py-1 backdrop-blur-md"
      >
        AMONG THE LIVING
        <span className="font-medium pl-2">16TH NOV - 4TH DEC</span>
      </Link>
    </div>
  );
}
