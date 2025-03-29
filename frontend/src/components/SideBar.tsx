import { NavLink } from 'react-router-dom';
import { Home, Mail, Info, StarHalf } from 'lucide-react';

interface SideBarProps {
  visibile: boolean;
  toggle: () => void;
}
const SideBar: React.FC<SideBarProps> = ({ visibile, toggle }) => {
  return (
    <div>
      <div className="relative">
        {/* Overlay (Only visible when `visibile` is true) */}
        {visibile && (
          <div
            className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40"
            onClick={toggle} // Closes menu when clicking outside
          ></div>
        )}

        {/* Sidebar Navigation */}
        <nav
          className={`w-52 opacity-95 bg-black z-50 fixed h-full top-10 md:hidden text-white p-6 transition-transform ${
            visibile ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={toggle}
        >
          <ul className="space-y-3">
            <li>
              <NavLink
                to="/"
                className="flex p-2 rounded-md items-center hover:bg-orange-300"
              >
                <Home className="w-5 h-5 mr-2" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="flex p-2 rounded-md items-center hover:bg-orange-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="flex p-2 rounded-md items-center hover:bg-orange-300"
              >
                <Info className="w-5 h-5 mr-2" />
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rate"
                className="flex p-2 rounded-md items-center hover:bg-orange-300"
              >
                <StarHalf className="w-5 h-5 mr-2" />
                Rate card
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
