import { useParams } from 'react-router-dom';
import dataStore from '../Store/dataStore';

import { Link } from 'react-router-dom';

import React from 'react';

import { Suspense } from 'react';
const PlayerDetails = React.lazy(() => import('../components/PlayerDetails'));
const SidebarDetails = React.lazy(() => import('../components/SidebarDetails'));
import Screen from '../LazyLoad/Screen';
import SideDetailsSkeleton from '../LazyLoad/SideDetailsSkeleton';

const HomeScreenDetails = () => {
  const { id } = useParams();
  const data = dataStore((state) => state.data);

  const item = data.find((item) => item.id === Number(id || ''));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="md:p-4 grid lg:grid-cols-12 md:grid-cols-12 gap-4">
      <div className="col-span-9">
        <Suspense fallback={<Screen />}>
          {' '}
          <PlayerDetails item={item} />
        </Suspense>
      </div>
      <div className="col-span-3 hidden lg:block md:block">
        {/* sidebar */}
        {data.map((item) => (
          <Link to={`/details/${item.id}`} key={item.id}>
            <div className="gap-2 mt-2">
              <Suspense fallback={<SideDetailsSkeleton />}>
                <SidebarDetails item={item} />
              </Suspense>
            </div>
          </Link>
        ))}
      </div>
      <div className=" lg:hidden md:hidden">
        {/* sidebar */}
        {data.map((item) => (
          <Link to={`/details/${item.id}`} key={item.id}>
            <div className="gap-2 mt-2">
              <Suspense fallback={<SideDetailsSkeleton />}>
                <SidebarDetails item={item} />
              </Suspense>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeScreenDetails;
