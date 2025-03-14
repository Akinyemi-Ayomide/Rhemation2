import React, { Suspense, lazy, useEffect, useState } from 'react';
import dataStore from '../Store/dataStore'; // Import Zustand store
import HomeScreenSkeleton from '../LazyLoad/HomeScreenSkeleton';

import Loader from '../components/Loader';
const Player = lazy(() => import('../components/Player'));

const HomeScreen: React.FC = () => {
  const data = dataStore((state) => state.data);
  const [loading, setLoading] = useState(true); // Access global data from Zustand store
  useEffect(() => {
    if (data && data.length > 0) {
      setTimeout(() => setLoading(false), 3000); // Add a delay to prevent flickering
    }
  }, [data]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      {/* Display video players in a grid */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4">
        {data.map((item) => (
          <Suspense fallback={<HomeScreenSkeleton />}>
            <Player
              key={item.id}
              id={item.id}
              link={item.link}
              name={item.name}
              title={item.title}
              position={item.position}
            />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
