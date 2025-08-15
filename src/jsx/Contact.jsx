function Contact() {
  return (
    <>
      <div id="contact" className="w-full h-screen flex items-center justify-center">
        {/* Transparent blurred container */}
        <div className="backdrop-blur-lg bg-[#1e1e1e] p-8 rounded-lg w-[400px] h-[450px] shadow-lg mt-[5%]">
          <h1 className='text-center text-white font-poppins text-[1.5rem] '>Contact Us!</h1>
          <form className="flex flex-col gap-4 mt-[12.5%]">
            {/* Name input */}
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded-md bg-white/20 text-white placeholder-white outline-none"
            />
            {/* Email input */}
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-md bg-white/20 text-white placeholder-white outline-none"
            />
            {/* Message input */}
            <textarea
              placeholder="Message"
              rows="4"
              className="p-3 rounded-md bg-white/20 text-white placeholder-white outline-none"
            ></textarea>

            {/* Submit button */}
            <button
              type="submit"
              className="bg-white text-[#1e1e1e] py-2 px-4 rounded-md font-semibold hover:bg-gray-200 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
