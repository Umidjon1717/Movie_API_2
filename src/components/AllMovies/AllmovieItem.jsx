import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSave } from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';

const AllmovieItem = ({ title, poster_path, vote_average, id, onSave }) => {
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = () => {
    if (isSaved) {
      toast.error("Unsaved");
    } else {
      toast.success('Saved');
      onSave({ title, poster_path, vote_average, id });
    }
    setIsSaved(!isSaved);
  };

  return (
    <div className="w-56 border relative">
      <div className="relative">
        <img
          onClick={() => navigate(`/movie/${id}`)}
          src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`}
          alt={title}
          className="w-full"
        />
        <BsSave
          onClick={handleSaveClick}
          className={`absolute top-2 right-2 cursor-pointer ${
            isSaved ? "text-red-500" : "text-gray-500"
          }`}
        />
      </div>
      <Toaster />
    </div>
  );
};

export default memo(AllmovieItem);