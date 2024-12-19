import React, { memo } from 'react';

const AdsItems = ({ backdrop_path }) => {
  return (
    <div className="w-full h-[440px] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={`${import.meta.env.VITE_IMAGE_URL}${backdrop_path}`}
        className="w-full h-full object-cover rounded-lg"
        alt="Movie"
      />
    </div>
  );
};

export default memo(AdsItems);
