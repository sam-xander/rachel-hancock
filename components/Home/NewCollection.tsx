const products = [
  {
    id: 1,
    name: 'Lorem Ipsum',
    href: '#',
    price: '',
    imageSrc: 'DSC_0032_crop.png',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  },
  {
    id: 2,
    name: 'Lorem Ipsum',
    href: '#',
    price: '',
    imageSrc: 'DSC_0032_crop.png',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  },
]

const Images = () => {
  return (
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-end pb-4 pr-4">
          <a href="#" className="whitespace-nowrap tracking-widest text-sm text-[#8D6F57] hover:brightness-105">
            VIEW ALL
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
        <div className=" grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 pb-16 sm:pb-32">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 brightness-75 hover:brightness-110 cursor-pointer">
                <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}
  
  export default function NewCollection() {
    return (
      <div className="relative bg-[#EAF1F2]">  
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          {/* Background image and overlap */}
          <div className="relative pt-16 sm:pt-32 pb-16">
            <p className="text-[#8D6F57] text-sm tracking-wider">LIMITED EDITION OIL PAINTINGS</p>
            <h1 className="tracking-tight text-[#556973] pt-2 text-4xl sm:text-5xl md:text-6xl">The Seascape Collection</h1>
            <p className="text-[#556973] pt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur tempor tellus quis tempor.</p>
            <div className="mt-4 sm:mt-8">
              <a
                href="#"
                className="inline-block border border-transparent bg-[#8D6F57] py-3 px-8 text-[#f6f6f6] hover:brightness-110"
              >
                VIEW COLLECTION
              </a>
            </div>
          </div>
        </div>
        <Images />
      </div>
    )
  }
  