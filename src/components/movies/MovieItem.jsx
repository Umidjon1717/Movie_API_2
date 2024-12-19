import React, { memo } from 'react';



const MovieItem = ({ title, poster_path }) => {
  return (
    <div className="w-56 border border-red-400 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`}
        alt={title}
        className="w-full h-80 object-cover"
      />
      <div className="p-3 bg-black">
        <h3 className="text-sm font-semibold text-white truncate">{title}</h3>
      </div>
      
    </div>
    
  );
};

export default memo(MovieItem);
