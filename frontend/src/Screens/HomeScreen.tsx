import React, { Suspense, lazy, useEffect, useState } from 'react';
import useDataStore from '../Store/dataStore'; // Ensure the import matches your store name
import HomeScreenSkeleton from '../LazyLoad/HomeScreenSkeleton';
import Loader from '../components/Loader';

const Player = lazy(() => import('../components/Player'));

const HomeScreen: React.FC = () => {
  const data = useDataStore((state) => state.data); // Ensure Zustand store is called properly
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (data?.length > 0) {
      setTimeout(() => setLoading(false), 3000);
    }
  }, [data]);

  if (loading) {
    return <Loader />;
  }

  // Filter videos based on searchQuery
  const filteredData = data?.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase().trim()),
  );

  return (
    <div>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search here..."
        className="border border-orange-300 text-white w-full py-2 px-6 rounded-full md:mt-5 -" // Added negative margin for upward movement
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Display video players in a grid */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 mt-4">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <Suspense key={item.id} fallback={<HomeScreenSkeleton />}>
              <Player
                id={item.id}
                link={item.link}
                name={item.name}
                title={item.title}
                position={item.position}
              />
            </Suspense>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-2">
            No results found
          </p>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
