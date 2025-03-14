import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';
import SideDetailsSkeleton from '../LazyLoad/SideDetailsSkeleton';

interface SidebarDetailsProps {
  item: Item;
}
interface Item {
  id: number;
  title: string;

  link?: string;
}
const SidebarDetails: React.FC<SidebarDetailsProps> = ({ item }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <SideDetailsSkeleton />
      ) : (
        <>
          {' '}
          <ReactPlayer
            url={item.link} // URL of the media (e.g., YouTube or local video)
            controls
            width="100%"
            height="100%"
            className="rounded-lg"
          />
          <h1 className="text-sm font-bold  ">{item.title}</h1>
        </>
      )}
    </div>
  );
};

export default SidebarDetails;
