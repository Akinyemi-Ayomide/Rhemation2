import React, { Suspense, lazy, useEffect, useState } from 'react';
import useDataStore from '../Store/dataStore'; // Ensure the import matches your store name
import HomeScreenSkeleton from '../LazyLoad/HomeScreenSkeleton';
import Loader from '../components/Loader';

const Player = lazy(() => import('../components/Player'));

const HomeScreen: React.FC = () => {
  const data = useDataStore((state) => state.data); // Ensure Zustand store is called properly
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (data?.length > 0) {
      setTimeout(() => setLoading(false), 3000);
    }
  }, [data]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {/* Display video players in a grid */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4">
        {data?.map((item) => (
          <Suspense key={item.id} fallback={<HomeScreenSkeleton />}>
            <Player
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
