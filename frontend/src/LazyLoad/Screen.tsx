import React from 'react';

import 'react-loading-skeleton/dist/skeleton.css';

const Screen: React.FC = () => {
  return (
    <div className="w-full h-full">
      {/* Full-screen skeleton */}

      <div className="w-full h-96 bg-orange-300 rounded-lg"></div>
    </div>
  );
};

export default Screen;
