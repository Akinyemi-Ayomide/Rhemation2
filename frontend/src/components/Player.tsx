import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

interface PlayerProps {
  id: number;
  link: string;
  name: string;
  title: string;
  position: string;
}

const Player: React.FC<PlayerProps> = ({ id, link, name, title, position }) => {
  return (
    <Link to={`/details/${id}`} className="block">
      <div className="rounded-lg overflow-hidden shadow-lg transition-transform transform ">
        {/* Video Player */}
        <ReactPlayer url={link} controls width="100%" className="rounded-lg -p-6" />

        {/* Text Content */}
        <div className="p-4">
          <h2 className="mt-2 text-xl font-bold">{title}</h2>
          <div className="flex justify-between items-center mt-2 text-xs">
            <p className="text-orange-300">{position}</p>
            <p>{name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Player;
