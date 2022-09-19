import { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const collections = [
  {
    src: "/DSC_0032_crop.png",
    name: "PRINTS",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt.",
    href: "/collections/prints",
  },
  {
    src: "/DSC_0032_crop.png",
    name: "TRADITIONAL STYLE ETCHINGS",
    description: "Anim aute id magna aliqua ad ad non deserunt sunt.",
    href: "/collections/etchings",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="sticky top-0 z-50 bg-[#f6f6f6]/75 backdrop-blur-md">
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <a className="text-4xl md:text-5xl pt-8 tracking-tight hidden md:block logo">
            Rachel Hancock
          </a>
        </Link>
      </div>
      <Popover className="relative">
        <div className="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <h1 className="text-4xl md:hidden tracking-tight">
              Rachel Hancock
            </h1>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="flex sm:inline-flex items-center justify-center sm:justify-center rounded-md focus:outline-none">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-8 w-8" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="hidden space-x-10 md:flex lg:translate-x-4"
          >
            <div
              className={
                router.pathname == "/"
                  ? "border-b-[1px] border-[#8D6F57]/70"
                  : ""
              }
            >
              <Link href="/">
                <a className="tracking-widest">HOME</a>
              </Link>
            </div>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-[#8D6F55]" : "text-[#8D6F57]",
                      "group inline-flex items-center rounded-md focus:outline-none"
                    )}
                  >
                    <div
                      className={
                        router.pathname == "/collections"
                          ? "border-b-[1px] border-[#8D6F57]/70"
                          : ""
                      }
                    >
                      <a className="tracking-widest">COLLECTIONS</a>
                    </div>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-[#8D6F55]" : "text-[#8D6F57]",
                        "ml-2 h-5 w-5 group-hover:text-[#8D6F57]"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-[#F6F6F6] px-5 py-6 sm:gap-8 sm:p-8 grid-cols-2">
                          {collections.map((collection) => (
                            <div>
                              <a key={collection.name} href={collection.href}>
                                <img
                                  src={collection.src}
                                  className="pb-4 object-cover object-center opacity-80 hover:opacity-100"
                                />
                              </a>
                              <a
                                key={collection.name}
                                href={collection.href}
                                className="-m-3 flex items-start rounded-sm p-3 hover:brightness-110"
                              >
                                <div className="mx-2">
                                  <p className="text-base font-medium text-[#8D6F57]/90">
                                    {collection.name}
                                  </p>
                                  <p className="mt-1 text-sm text-[#8D6F57]/80">
                                    {collection.description}
                                  </p>
                                </div>
                              </a>
                            </div>
                          ))}
                        </div>
                        <div className="p-5 sm:p-8 bg-[#F6F6F6]">
                          <Link href="/collections">
                            <a className="-m-3 flow-root p-3 arrow-hover-outer bg-[#8D6F57] hover:brightness-110">
                              <div className="flex justify-center items-center">
                                <div className="text-[#f6f6f6]">
                                  VIEW COLLECTIONS
                                </div>
                                <span className="ml-3 inline-flex items-center rounded-full px-3 py-0.5 text-xs leading-5 text-white arrow-hover-inner">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-arrow-right"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <div
              className={
                router.pathname == "/gallery"
                  ? "border-b-[1px] border-[#8D6F57]/70"
                  : ""
              }
            >
              <Link href="/gallery">
                <a className="tracking-widest">GALLERY</a>
              </Link>
            </div>
            <div
              className={
                router.pathname == "/about"
                  ? "border-b-[1px] border-[#8D6F57]/70"
                  : ""
              }
            >
              <Link href="/about">
                <a className="tracking-widest">ABOUT</a>
              </Link>
            </div>
          </Popover.Group>
          <div className="hidden space-x-8 pr-8 items-center justify-end md:flex md:flex-1 lg:w-0">
            <a href="https://instagram.com/rachel_paints_">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </a>
            <a href="https://twitter.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
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
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-[#8D6F57]/10 rounded-lg bg-[#f6f6f6] shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="ml-4 text-lg opacity-80">Rachel Hancock</h1>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">
                    {collections.map((collection) => (
                      <a
                        key={collection.name}
                        href={collection.href}
                        className="-m-3 flex items-center rounded-lg p-3 hover:bg-[gray-50]"
                      >
                          
                        <div className="grid grid-cols-5 hover:brightness-110 items-center">
                          <img src="/DSC_0032_crop.png" className="h-auto w-full col-span-1" />
                          <p className="px-4 col-span-4">
                          {collection.name}
                          </p>
                        </div>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/">
                  <a
                    className="hover:brightness-110"
                  >
                    HOME
                  </a>
                  </Link>
                  <Link href="/">
                  <a
                    className="hover:brightness-110"
                  >
                    COLLECTIONS
                  </a>
                  </Link>
                  <Link href="/">
                  <a
                    className="hover:brightness-110"
                  >
                    GALLERY
                  </a>
                  </Link>
                  <Link href="/">
                  <a
                    className="hover:brightness-110"
                  >
                    ABOUT
                  </a>
                  </Link>
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center border border-transparent bg-[#8D6F57] px-4 py-2 text-[#f6f6f6] shadow-sm hover:brightness-110"
                  >
                    GET IN TOUCH
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}