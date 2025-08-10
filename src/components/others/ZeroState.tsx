import { FaYoutube, FaLinkedin } from 'react-icons/fa';
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { RiInstagramFill } from 'react-icons/ri';

export default function ZeroState() {
  const youtubeUrl = import.meta.env.VITE_YOUTUBE;
  const instagramUrl = import.meta.env.VITE_INSTAGRAM;
  const linkedinUrl = import.meta.env.VITE_LINKEDIN;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4 text-center">
      <div className="flex flex-col items-center justify-center overflow-y-auto py-15">
        <MdOutlineQrCodeScanner className="w-30 h-30 text-white" />

        <h1 className="mt-6 text-3xl font-bold text-white">
          Oops! You're Not at the Table
        </h1>

        <p className="mt-2 max-w-md text-gray-400">
          This page is only accessible by scanning the QR code placed on your table.
          Please scan it to start browsing the menu and ordering your food.
        </p>
      </div>

      <div className="flex space-x-4 fixed bottom-0 pb-5 pt-2 left-1/2 transform -translate-x-1/2 bg-black w-full justify-center">
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors duration-300"
          aria-label="YouTube"
        >
          <FaYoutube className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors duration-300"
          aria-label="Instagram"
        >
          <RiInstagramFill className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
        </a>
      </div>
    </div>
  );
}