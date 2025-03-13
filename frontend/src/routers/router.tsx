import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../Layout/RootLayout';
import HomeScreen from '../Screens/HomeScreen';
import ContactScreen from '../Screens/ContactScreen';
import AboutScreen from '../Screens/AboutScreen';
import HomeScreenDetails from '../Screens/HomeScreenDetails';
import RateScreen from '../Screens/RateScreen';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomeScreen /> },
      { path: 'contact', element: <ContactScreen /> },
      { path: 'about', element: <AboutScreen /> },
      { path: 'rate', element: <RateScreen /> },
      { path: 'details/:id', element: <HomeScreenDetails /> },
    ],
  },
]);

export default router;
