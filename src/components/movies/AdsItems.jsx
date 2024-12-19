import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const AdsItems = ({ backdrop_path, id }) => {
  const navigate=useNavigate()
  return (
    <div className="w-full h-[440px] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
      onClick={()=>navigate(`/movie/${id}`)}
        src={`${import.meta.env.VITE_IMAGE_URL}${backdrop_path}`}
        className="w-full h-full object-cover rounded-lg"
        alt="Movie"
      />
    </div>
  );
};

export default memo(AdsItems);
