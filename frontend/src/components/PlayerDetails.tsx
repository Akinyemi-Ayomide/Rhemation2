import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';
import Screen from '../LazyLoad/Screen';


interface PlayerItem {
  link: string;
  title: string;
  position: string;
  name: string;
}

interface PlayerDetailsProps {
  item: PlayerItem;
}


const PlayerDetails: React.FC<PlayerDetailsProps>= ({ item }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate loading time
  }, []);
  return (
    <div className="w-full">
      {loading ? (
        <Screen /> // Show skeleton while loading
      ) : (
        <>
          <ReactPlayer
            url={item.link}
            controls
            width="100%"
            className="rounded-lg"
          />
          <h1 className="mt-2 px-2 text-xl font-semibold">{item.title}</h1>
          <div className="flex justify-between items-center mt-2 font-bold">
            <p className="text-orange-300 px-2 text-sm">
              {item.position}{' '}
            </p>
            <p className="mt-2 text-sm">{item.name}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default PlayerDetails;
