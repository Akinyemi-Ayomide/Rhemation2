import { Link } from 'react-router-dom';
import logo1 from '../assets/logo1.png';
import { AlignJustify } from 'lucide-react';
import { motion } from 'framer-motion';


interface NavbarProps {
  toggle: () => void; // Assuming toggle is a function that doesn't take any arguments and returns void
}
const Navbar: React.FC<NavbarProps> = ({ toggle })  => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="bg-black flex justify-between items-center px-3 md:px-10 py-3">
        <div className="flex items-center">
          <button
            onClick={toggle}
            aria-label="Toggle Sidebar"
            className="md:hidden"
          >
            <AlignJustify className="w-6 h-6 text-white mr-2" />
          </button>
          <Link to="/">
            <img src={logo1} alt="Company Logo" className="h-10" />
          </Link>
        </div>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }} // Moves up & down
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }} // Infinite bounce
        >
          <Link
            to="https://wa.me/+2347053504996"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-300 hover:bg-orange-300 hover:py-2 hover:px-4 hover:text-white hover:rounded-full transition-all"
          >
            HIRE ME
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
