const HomeScreenSkeleton = () => {
  return (
    <div className="grid lg:grid-cols-1 md:grid-cols-1 gap-4 animate-pulse">
      {/* Skeleton for each video item */}
      {Array.from({ length: 2 }).map((_, index) => (
        <div key={index} className="rounded-lg overflow-hidden">
          {/* Skeleton for video player */}
          <div className="bg-gray-800 rounded-lg h-96 w-full"></div>

          {/* Skeleton for title */}
          <div className="mt-2 bg-gray-800 h-6 w-3/4 rounded"></div>

          {/* Skeleton for editor name */}
          <div className="flex justify-between items-center mt-2">
            <div className="bg-gray-800 h-4 w-1/4 rounded"></div>
            <div className="bg-gray-800 h-4 w-1/3 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeScreenSkeleton;
