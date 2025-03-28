import { useParams, Link } from 'react-router-dom';
import React, { Suspense } from 'react';
import dataStore from '../Store/dataStore';

const PlayerDetails = React.lazy(() => import('../components/PlayerDetails'));
const SidebarDetails = React.lazy(() => import('../components/SidebarDetails'));
import Screen from '../LazyLoad/Screen';
import SideDetailsSkeleton from '../LazyLoad/SideDetailsSkeleton';

const HomeScreenDetails = () => {
  const { id } = useParams();
  const data = dataStore((state) => state.data);

  if (!data || data.length === 0) {
    return <div>Loading...</div>; // Fallback when data is not yet available
  }

  const item = data.find((item) => item.id === Number(id || ''));

  if (!item) {
    return <div className="text-center text-red-500">Item not found</div>;
  }

  const comments = [
    { user: item.user1, comment: item.comment1 },
    { user: item.user2, comment: item.comment2 },
    { user: item.user3, comment: item.comment3 },
    { user: item.user4, comment: item.comment4 },
    { user: item.user5, comment: item.comment5 },
    { user: item.user6, comment: item.comment6 },
    { user: item.user7, comment: item.comment7 },
  ].filter((comment) => comment.user && comment.comment);

  return (
    <div className="md:p-4 grid lg:grid-cols-12 md:grid-cols-12 gap-4 md:max-w-[70%] justify-center mx-auto mt-10">
      {/* Main Player Section */} 
      <div className="col-span-9">
        <Suspense fallback={<Screen />}>
          <PlayerDetails item={item} />
        </Suspense>

        {/* Comments Section */}
        <div className="mt-20">
          <h2 className="text-xl font-bold">Comments</h2>
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full py-2 px-4 bg-gray-200 outline-none rounded-2xl mt-2"
          />
          {comments.length > 0 ? (
            comments.map(({ user, comment }, index) => (
              <div key={index} className="mt-4 flex flex-row items-center">
                <div className="ml-2">
                  <h3 className="text-orange-300">@{user}</h3>
                  <p className="text-gray-600">{comment}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 mt-2">No comments yet.</p>
          )}
        </div>
      </div>

      {/* Sidebar for Related Videos */}
      <div className="col-span-3 hidden lg:block md:block">
        <Suspense fallback={<SideDetailsSkeleton />}>
          {data.map((item) => (
            <Link
              to={`/details/${item.id}`}
              key={item.id}
              className="block mt-2"
            >
              <SidebarDetails item={item} />
            </Link>
          ))}
        </Suspense>
      </div>

      {/* Mobile Sidebar Below Comments */}
      <div className="lg:hidden md:hidden mt-10">
        <Suspense fallback={<SideDetailsSkeleton />}>
          {data.map((item) => (
            <Link
              to={`/details/${item.id}`}
              key={item.id}
              className="block mt-2"
            >
              <SidebarDetails item={item} />
            </Link>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default HomeScreenDetails;
