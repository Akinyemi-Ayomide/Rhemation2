import { useParams } from 'react-router-dom';
import dataStore from '../Store/dataStore';

import { Link } from 'react-router-dom';

import React from 'react';

import { Suspense } from 'react';
const PlayerDetails = React.lazy(() => import('../components/PlayerDetails'));
const SidebarDetails = React.lazy(() => import('../components/SidebarDetails'));
import Screen from '../LazyLoad/Screen';
import SideDetailsSkeleton from '../LazyLoad/SideDetailsSkeleton';

import Loader from '../components/Loader';
// import profile_icon from '../assets/profile_icon.png';

const HomeScreenDetails = () => {
  const { id } = useParams();
  const data = dataStore((state) => state.data);

  const item = data.find((item) => item.id === Number(id || ''));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="md:p-4 grid lg:grid-cols-12 md:grid-cols-12 gap-4 md:max-w-[70%] justify-center mx-auto mt-10">
      <div className="col-span-9">
        <Suspense fallback={<Screen />}>
          {' '}
          <PlayerDetails item={item} />
        </Suspense>
        <div className="mt-20 hidden">
          <h1>comment</h1>
          <input
            type="text"
            placeholder="Add comment..."
            className="w-full py-2 px-4 bg-gray-400 outline-none rounded-2xl mt-2"
          />
        </div>
        <div className="mt-10">
          <div className="mt-2 flex flex-row item-center">
            <div>
              {/* <img
                src={profile_icon}
                className="bg-gray-500 rounded-full w-3"
                m-2
                alt="profile"
              /> */}
            </div>
            <div>
              {' '}
              <h1 className="text-orange-300">@{item.user1}</h1>
              <p>{item.comment1}</p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="mt-2 flex flex-row item-center">
            <div>
              {/* <img
                src={profile_icon}
                className="bg-gray-500 rounded-full w-3"
                m-2
                alt="profile"
              /> */}
            </div>
            <div>
              {' '}
              <h1 className="text-orange-300">@{item.user2}</h1>
              <p>{item.comment2}</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mt-2 flex flex-row item-center">
            <div>
              {/* <img
                src={profile_icon}
                className="bg-gray-500 rounded-full w-3"
                m-2
                alt="profile"
              /> */}
            </div>
            <div>
              {' '}
              <h1 className="text-orange-300">@{item.user3}</h1>
              <p>{item.comment3}</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mt-2 flex flex-row item-center">
            <div>
              {/* <img
                src={profile_icon}
                className="bg-gray-500 rounded-full w-3"
                m-2
                alt="profile"
              /> */}
            </div>
            <div>
              {' '}
              <h1 className="text-orange-300">@{item.user4}</h1>
              <p>{item.comment4}</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mt-2 flex flex-row item-center">
            <div>
              {/* <img
                src={profile_icon}
                className="bg-gray-500 rounded-full w-3"
                m-2
                alt="profile"
              /> */}
            </div>
            <div>
              {' '}
              <h1 className="text-orange-300">@{item.user5}</h1>
              <p>{item.comment5}</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mt-2 flex flex-row item-center">
            <div>
              {/* <img
                src={profile_icon}
                className="bg-gray-500 rounded-full w-3"
                m-2
                alt="profile"
              /> */}
            </div>
            <div>
              {' '}
              <h1 className="text-orange-300">@{item.user6}</h1>
              <p>{item.comment6}</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mt-2 flex flex-row item-center">
            <div>
              {/* <img
                src={profile_icon}
                className="bg-gray-500 rounded-full w-3"
                m-2
                alt="profile"
              /> */}
            </div>
            <div>
              {' '}
              <h1 className="text-orange-300">@{item.user7}</h1>
              <p>{item.comment7}</p>
            </div>
          </div>
        </div>
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
        {/* under the comment */}
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
