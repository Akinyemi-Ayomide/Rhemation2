
import { NavLink } from 'react-router-dom';
import { Home, Mail, Info, StarHalf } from 'lucide-react';

interface SideBarProps {
  visibile: boolean;
  toggle: () => void;
}
const SideBar: React.FC<SideBarProps> = ({visibile, toggle}) => {
  return (
    <div>
      {visibile ? (<nav className={`w-full bg-black opacity-95 z-50 fixed h-full md:hidden  text-white p-6 `} onClick={toggle}>
        <ul className="space-y-3">
          <li>
            <NavLink
              to="/"
              className="flex block p-2 rounded-md items-center hover:bg-orange-300"
            >
              <Home className="w-5 h-5 mr-2" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="flex block p-2 rounded-md items-center hover:bg-orange-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="flex block p-2 rounded-md  items-center hover:bg-orange-300"
            >
              <Info className="w-5 h-5 mr-2" />
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rate"
              className="flex block p-2 rounded-md  items-center hover:bg-orange-300"
            >
              <StarHalf className="w-5 h-5 mr-2" />
              Rate card
            </NavLink>
          </li>
        </ul>
      </nav>) : ('')}
    </div>
  );
};

export default SideBar;
