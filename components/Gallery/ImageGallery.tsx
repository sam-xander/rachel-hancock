import Image from "next/image";

export default function ImageGallery() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-end">
          <Image
            src="/DSC_0032_crop.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="flex items-end ml-7 md:mb-10">
          <p className="text-xl opacity-95">Painting Name</p>
          <p className="text-xl opacity-80">, 16&quot; x 10&quot;</p>
        </div>
        <div></div>
        <div className="flex justify-center">
          <Image
            src="/DSC_0032_crop.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/DSC_0032_crop.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div></div>
        <div></div>
        <div className="flex justify-center">
          <Image
            src="/DSC_0032_crop.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
}
