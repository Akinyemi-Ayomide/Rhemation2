import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Screen: React.FC = () => {
  return (
    <div className="w-full h-full">
      {/* Full-screen skeleton */}
      <Skeleton className="w-full h-96" />
    </div>
  );
};

export default Screen;
