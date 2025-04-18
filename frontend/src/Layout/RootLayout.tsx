import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';

import { Home, Mail, Info, StarHalf } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import SideBar from '../components/SideBar';

const RootLayout: React.FC = () => {
  const [isSidebarVisible] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();
  const [visibile, setVisibile] = useState<boolean>(false);

  const hideSidebarPages = ['/details'];

  // Check if the current path starts with '/details'
  const shouldHideSidebar = hideSidebarPages.some((page) =>
    location.pathname.startsWith(page),
  );
  const toggle = (): void => {
    setVisibile(!visibile);
  };

  try {
    return (
      <div>
        <Navbar toggle={toggle} />
        <SideBar visibile={visibile} toggle={toggle} />
        <div className="flex min-h-screen mt-15">
          {/* Conditionally render sidebar */}
          {isSidebarVisible && !shouldHideSidebar && (
            <nav className="w-52 bg-black
             fixed right-0 left-0 hidden md:block  text-white p-6">
              <ul className="space-y-3">
                <li>
                  <NavLink
                    to="/"
                    className="flex  text-sm p-2 rounded-md items-center hover:border-l-4 hover:border-l-orange-300 "
                  >
                    <Home className="w-5 h-5 mr-2" />
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="flex  text-sm  p-2 rounded-md items-center hover:border-l-4 hover:border-l-orange-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="flex  text-sm  p-2 rounded-md  items-center hover:border-l-4 hover:border-l-orange-300"
                  >
                    <Info className="w-5 h-5 mr-2" />
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/rate"
                    className="flex  text-sm  p-2 rounded-md  items-center hover:border-l-4 hover:border-l-orange-300"
                  >
                    <StarHalf className="w-5 h-5 mr-2" />
                    Rate card
                  </NavLink>
                </li>
              </ul>
            </nav>
          )}

          {/* Main Content */}
          <div className="flex-1   text-white  md:max-w-[80%] justify-center md:mr-10 mx-auto ">
            <Outlet /> {/* This will render the component based on the route */}
          </div>
        </div>
      </div>
    );
  } catch (err) {
    console.error('Error in RootLayout:', err);
    setError('Something went wrong. Please try again.');

    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500 font-bold">{error}</p>
      </div>
    );
  }
};

export default RootLayout;
