import { Link } from 'react-router-dom';
import logo1 from '../assets/logo1.png';
import { AlignJustify } from 'lucide-react';

const Navbar = ({ toggleSidebar, toggle }) => {
  const handleClick = () => {
    toggle();
  };
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="bg-black flex justify-between items-center px-4 py-3">
        <div className="flex items-center">
          <button onClick={handleClick} aria-label="Toggle Sidebar">
            <AlignJustify className="w-6 h-6 text-white mr-2" />
          </button>
          <Link to="/">
            <img src={logo1} alt="Company Logo" className="h-10" />
          </Link>
        </div>
        <div>
          <Link
            to="https://wa.me/+2347053504996"
            className="text-orange-300 hover:bg-orange-300 hover:py-2 hover:px-4 hover:text-white hover:rounded-full transition-all"
          >
            HIRE ME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
