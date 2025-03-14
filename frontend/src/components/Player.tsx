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
    <Link to={`/details/${id}`}>
      <div className="rounded-lg overflow-hidden">
        <ReactPlayer url={link} controls width="100%" className="rounded-lg" />
        <h2 className="mt-2 text-xl font-bold">{title}</h2>
        <div className="flex justify-between items-center mt-2">
          <p className="text-orange-300 text-xs">{position}</p>
          <p className="mt-2 text-xs">{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default Player;
