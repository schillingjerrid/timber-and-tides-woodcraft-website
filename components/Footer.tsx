import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between text-center md:text-left">
        <p className="text-sm">&copy; {new Date().getFullYear()} Timber And Tides Woodcraft. All rights reserved.</p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://www.instagram.com/timberandtideswoodcraft" target="_blank" rel="noopener noreferrer">
            <AiOutlineInstagram className="text-2xl hover:text-white transition duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
