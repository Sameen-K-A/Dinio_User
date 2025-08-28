import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface NavbarProps {
  onNavigate: (section: 'home' | 'what' | 'works' | 'contact') => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-4 py-6 lg:p-6"
    >
      <div className="flex justify-between items-center">
        <button
          onClick={() => onNavigate('home')}
          className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
        >
          <img src="/svgs/logo.svg" alt="Logo" className="h-4 md:h-6 w-auto" />
        </button>

        <div className="md:flex space-x-4 md:space-x-10 hidden">
          <button
            onClick={() => onNavigate('what')}
            className="text-sm md:text-base cursor-pointer font-medium hover:text-gray-300 transition-transform duration-200 active:scale-80"
          >
            What is Dinio
          </button>
          <button
            onClick={() => onNavigate('works')}
            className="text-sm md:text-base cursor-pointer font-medium hover:text-gray-300 transition-transform duration-200 active:scale-80"
          >
            How Dinio Works
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="text-sm md:text-base cursor-pointer font-medium hover:text-gray-300 transition-transform duration-200 active:scale-80"
          >
            Contact
          </button>
        </div>

        <div className='block md:hidden'>
          <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <Menu className='cursor-pointer' />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4 mt-2 w-56 rounded-xl bg-[#191919] text-white backdrop-blur-sm border border-white/10">
              <DropdownMenuItem
                className="focus:bg-muted/10 rounded-lg overflow-hidden focus:text-white p-3 cursor-pointer"
                onClick={() => onNavigate('what')}
              >
                What is Dinio
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onNavigate('works')}
                className="focus:bg-muted/10 rounded-lg overflow-hidden focus:text-white p-3 cursor-pointer"
              >
                How Dinio Works
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onNavigate('contact')}
                className="focus:bg-muted/10 rounded-lg overflow-hidden focus:text-white p-3 cursor-pointer"
              >
                Contact
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.nav>
  );
};