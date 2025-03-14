import { useParams } from 'react-router-dom';
import dataStore from '../Store/dataStore';

import { Link } from 'react-router-dom';
import { Smile } from 'lucide-react';
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

        {/*comment*/}

        {/* <div className="mt-4">
          <h2>comment</h2>
        </div>

        <div>
          <input
            type="text"
            className="w-full p-2 border-b-2 border-gray-400 focus:outline-none focus:border-b-black"
          />
          <div className="flex justify-between mt-2">
            <div>
              <Smile className="w-8 h-8" />{' '}
            </div>
            <div className="flex gap-2">
              <button className="bg-orange-300 hover:bg-orange-400 ease-in-out transition-all px-4 py-2 rounded-full">
                Cancel
              </button>
              <button className="bg-orange-300 hover:bg-orange-400 ease-in-out transition-all px-4 py-2 rounded-full">
                Comment
              </button>
            </div>
          </div>
        </div> */}
        {/*reply*/}
        {/* <div>
          <div className="bg-gray-500 p-2 mt-2 rounded-lg">
            <p className="text-orange-300 font-semibold italic">
              @taiwo kehinde
            </p>
            <p>The movie is so lovely</p>
          </div>
          <div className="bg-gray-500 p-2 mt-2 rounded-lg">
            <p className="text-orange-300 font-semibold italic">
              @tunde esther
            </p>
            <p>I love the colors</p>
          </div>
          <div className="bg-gray-500 p-2 mt-2 rounded-lg">
            <p className="text-orange-300 font-semibold italic">@segun taiwo</p>
            <p>the sound came out so nice</p>
          </div>
        </div> */}
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
    </div>
  );
};

export default HomeScreenDetails;
