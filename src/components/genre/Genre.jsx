import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Genre = ({ data, setSelectedGenres, selectedGenres }) => {

  if (!data || !selectedGenres) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  const handleChange = (id) => {
    if (selectedGenres.includes(id)) {
      setSelectedGenres((prev) => prev.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedGenres((prev) => [...prev, id]);
    }
  };

  return (
    <div className="flex gap-4 overflow-auto p-4 container scrollbar-hide">
      {data?.map((item) => {
        const isActive = selectedGenres.includes(item.id);
        return (
          <div
            onClick={() => {
              handleChange(item.id);
            }}
            className={`whitespace-nowrap p-2 ${
              isActive ? 'bg-white text-[#C61F1F]' : 'bg-[#C61F1F] text-white'
            } hover:bg-white hover:text-[#C61F1F] border border-[#C61F1F] rounded-md select-none cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg`}
            key={item.id}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genre;
