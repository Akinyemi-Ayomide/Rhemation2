import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className=" w-full h-screen fixed right-0 left-0 bottom-0 z-50 bg-black flex items-center justify-center">
      <div className="w-14 h-14 border-4 border-transparent border-t-orange-300 border-r-orange-300 rounded-full absolute animate-spin"></div>
      <div className="w-10 h-10 border-4 border-transparent border-t-orange-300 border-r-orange-300 rounded-full absolute animate-[spin_1.75s_linear_reverse_infinite]"></div>
      <div className="w-6 h-6 border-4 border-transparent border-t-orange-300 border-r-orange-300 rounded-full absolute animate-[spin_1.5s_linear_infinite]"></div>
    </div>
  );
};

export default Loader;
