import Image from "next/image";

export default function Profile() {
  return (
    <div className="overflow-hidden bg-[#f6f6f6]">
      <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-[#8D6F57]/80 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <p className="text-md tracking-wider font-light pb-2">THE ARTIST</p>
            <h1 className="tracking-widest text-4xl md:text-5xl pb-2 font-medium uppercase">
              Meet Rachel
            </h1>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <div className="relative lg:-translate-y-8 h-full mx-auto max-w-prose text-base lg:max-w-none">
              <div className="aspect-w-12 aspect-h-10 lg:aspect-none">
                <Image
                  className="rounded-lg object-cover object-top shadow-lg"
                  src="/profile.jpg"
                  alt=""
                  fill
                />
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 space-y-6 opacity-80">
            <div className="mx-auto max-w-prose lg:max-w-none">
              <p className="text-lg sm:text-xl tracking-wide font-light">
                Rachel Hancock is a landscape painter who studied for her BA in
                Fine Art at Falmouth University and graduated in 2020. She is
                currently studying for her MA at Plymouth Arts University.
                <br />
                <br />
                Her oil paintings combine her memories, observations and her
                imagination. She is influenced by the natural environment and
                how we are entangled with it.
                <br />
                <br />
                <q>
                  We need to foster a respect for the path beneath our feet as
                  we walk it... in us the landscape is observing itself.
                </q>
                <cite>
                  {" "}
                  - The Art of Mindful Walking: Meditations on the Path, Adam
                  Ford
                </cite>
                <br />
                <br />
                Her work investigates mindfulness in painting as a form of
                meditation. When she sits and paints in her studio, she brings
                her full attention to the memories of the places she&apos;s
                visited.
                <br />
                <br />
                <q>
                  The process of painting becomes a meditation in itself. It
                  allows me to deepen my love and appreciation for places I have
                  walked alongside the coastline and through woodlands around
                  Devon and Cornwall.
                </q>
                <cite> - Rachel Hancock</cite>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
