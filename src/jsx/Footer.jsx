import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYelp, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full h-[200px] bg-[#1e1e1e] flex items-center justify-center">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-4 text-center">

        {/* Social Media Icons */}
        <div className="flex gap-6 text-white text-xl">
          <a href="https://www.facebook.com/MarciHomes/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition"><FaFacebookF /></a>
          <a href="https://www.instagram.com/marciandlauren_nvrealtors/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/marci-metzger-30642496/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition"><FaLinkedinIn /></a>
          <a href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition"><FaYelp /></a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm tracking-wider font-poppins">
          COPYRIGHT © {new Date().getFullYear()} MARCI METZGER HOMES — ALL RIGHTS RESERVED
        </p>

        <p className="text-gray-400 text-[0.75rem] tracking-wider font-poppins">
          This website was developed by Miguel Ivan Calarde.
        </p>

        {/* Developer Links */}
        <div className="flex gap-6 text-white text-xl">
          <a href="https://www.linkedin.com/in/vnclrd/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition"><FaLinkedinIn /></a>
          <a href="https://github.com/vnclrd" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
