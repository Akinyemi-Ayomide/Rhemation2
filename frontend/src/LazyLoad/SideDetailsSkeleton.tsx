import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const SideDetailsSkeleton = () => {
  return (
    <div className="w-full h-full">
      {/* Full-screen skeleton */}
      <Skeleton className="w-full h-40 bg-gray-900 rounded-lg" />
    </div>
  );
};

export default SideDetailsSkeleton;
