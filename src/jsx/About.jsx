function About() {
  return (
    <>
      <div id="about" className="relative w-full min-h-screen flex items-center justify-center">
        {/* Background layers */}
        <div className="absolute top-0 left-0 w-full h-[70%] bg-[#1e1e1e]" />
        <div className="absolute bottom-0 left-0 w-full h-[70%] bg-transparent" />

        {/* Content */}
        <div className="relative flex flex-col items-center">
          <h1 className="mb-6 text-white text-2xl">Nice to meet you!</h1>
          <div
            className="
              w-[300px] h-[300px] rounded-full
              bg-[url('/marci.jpg')] bg-cover bg-center bg-no-repeat
            "
          ></div>
        </div>
      </div>
    </>
  )
}

export default About
