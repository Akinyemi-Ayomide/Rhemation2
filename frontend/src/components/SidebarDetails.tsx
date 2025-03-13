import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';
import SideDetailsSkeleton from '../LazyLoad/SideDetailsSkeleton';
const SidebarDetails = ({item}) => {
   const [loading, setLoading] = useState(true);
      useEffect(() => {
          setTimeout(() => setLoading(false), 3000); // Simulate loading time
        }, []);
  return (
    <div>
     {loading ? (<SideDetailsSkeleton />):(<> <ReactPlayer
        url={item.link} // URL of the media (e.g., YouTube or local video)
        controls
        width="100%"
        height="100%"
        className="rounded-lg"
      />
      <h1 className="text-sm font-bold  ">{item.title}</h1></>)}
    </div>
  );
};

export default SidebarDetails;
