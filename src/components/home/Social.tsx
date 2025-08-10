import { motion } from 'framer-motion';
import { FaYoutube, FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

export default function SocialIcons() {
  const youtubeUrl = import.meta.env.VITE_YOUTUBE;
  const instagramUrl = import.meta.env.VITE_INSTAGRAM;
  const linkedinUrl = import.meta.env.VITE_LINKEDIN;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }}
      className="fixed left-4 md:left-6 bottom-4 md:bottom-6 z-50"
    >
      <div className="flex flex-col space-y-4">
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
    </motion.div>
  );
};