function Gallery() {
  return (
    <>
      <div id="gallery" className="w-full min-h-screen bg-[#1e1e1e] flex items-center justify-center">
        <div className="grid grid-cols-3 gap-6 mt-[5%]">
          {/* Photo items */}
          <div
            className="w-[300px] h-[250px] bg-[url('/img-6.jpg')] bg-cover bg-center bg-no-repeat"
          ></div>

          <div
            className="w-[300px] h-[250px] bg-[url('/img-6.jpg')] bg-cover bg-center bg-no-repeat"
          ></div>

          <div
            className="w-[300px] h-[250px] bg-[url('/img-6.jpg')] bg-cover bg-center bg-no-repeat"
          ></div>

          <div
            className="w-[300px] h-[250px] bg-[url('/img-6.jpg')] bg-cover bg-center bg-no-repeat"
          ></div>

          <div
            className="w-[300px] h-[250px] bg-[url('/img-6.jpg')] bg-cover bg-center bg-no-repeat"
          ></div>

          <div
            className="w-[300px] h-[250px] bg-[url('/img-6.jpg')] bg-cover bg-center bg-no-repeat"
          ></div>
        </div>
      </div>
    </>
  )
}

export default Gallery
