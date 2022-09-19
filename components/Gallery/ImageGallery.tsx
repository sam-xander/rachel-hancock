export default function ImageGallery() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-end">
          <img src="/DSC_0032_crop.png" />
        </div>
        <div className="flex items-end ml-7 md:mb-10">
          <p className="text-xl opacity-95">Painting Name</p>
          <p className="text-xl opacity-80">, 16" x 10"</p>
        </div>
        <div></div>
        <div className="flex justify-center">
          <img src="/DSC_0032_crop.png" />
        </div>
        <div className="flex justify-center">
          <img src="/DSC_0032_crop.png" />
        </div>
        <div></div>
        <div></div>
        <div className="flex justify-center">
          <img src="/DSC_0032_crop.png" />
        </div>
      </div>
    </>
  );
}
