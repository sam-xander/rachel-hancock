import { CameraIcon } from "@heroicons/react/20/solid";

export default function Profile() {
  return (
    <div className="overflow-hidden bg-[#f6f6f6]">
      <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-[#8D6F57]/80 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <p className="text-md tracking-wider">
              THE ARTIST
            </p>
            <h1 className="tracking-tight text-4xl sm:text-5xl lg:text-7xl">
              Meet Rachel
            </h1>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-10 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-top shadow-lg"
                    src="/profile.jpg"
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm">
                  <CameraIcon
                    className="h-5 w-5 flex-none opacity-80"
                    aria-hidden="true"
                  />
                  <span className="ml-2 opacity-80">Rame Head, Torpoint</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 space-y-6 opacity-80">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg sm:text-xl tracking-wider">
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi.
              </p>
            </div>
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg sm:text-xl tracking-wider">
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi.
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi.
              </p>
            </div>
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg sm:text-xl tracking-wider">
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi.
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi.
              </p>
            </div>
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg sm:text-xl tracking-wider">
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi.
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi.
              </p>
            </div>
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg sm:text-xl tracking-wider">
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}