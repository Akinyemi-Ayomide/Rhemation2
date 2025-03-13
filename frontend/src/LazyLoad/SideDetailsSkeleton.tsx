import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const SideDetailsSkeleton = () => {
  return (
    <div className="w-full h-full">
      {/* Full-screen skeleton */}
      <Skeleton className="w-full h-40" />
    </div>
  );
};

export default SideDetailsSkeleton;
