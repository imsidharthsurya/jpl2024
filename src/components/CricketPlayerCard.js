import React from 'react';

const CricketPlayerCard = ({ player }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-red-400 text-white hover:text-red-400 hover:bg-white hover:delay-100 m-5">
      <img src={player.image} alt={player.name} className="w-full h-64 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{player.name}</div>
        <p className="text-base">{player.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-red-400 mr-2">
          {player.role}
        </span>
        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-red-400 mr-2">
          {player.country}
        </span>
      </div>
    </div>
  );
};

export default CricketPlayerCard;
