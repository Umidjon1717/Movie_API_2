import Header from "@/components/header/Header";
import Movies from "@/components/movies/Movies";
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Genre from "@/components/genre/Genre";
import { request } from "@/api";
import Footer from "@/components/footer/Footer";
import Allmovies from "@/components/AllMovies/Allmovies";

const Latest = () => {
  const [data, setData] = useState({ results: [] });
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);

  useEffect(() => {
    request
      .get("/genre/movie/list")
      .then((res) => setGenres(res.data.genres))
      .catch((err) => console.error("Error fetching genres:", err));
  }, []);

  useEffect(()=>{
    setPage(1)
  }, [selectedGenre])

  useEffect(() => {
    request("/discover/movie", {
      params: {
        page,
        without_genres: "18,10749,99,27",
        with_genres: selectedGenre.join(","),
      },
    })
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching movies:", err));
  }, [page, selectedGenre]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="bg-black">
      <Header />
      {genres.length > 0 ? (
        <Genre
          data={genres}
          setSelectedGenres={setSelectedGenre}
          selectedGenres={selectedGenre}
        />
      ) : (
        <div className="text-white text-center p-4">Loading genres...</div>
      )}
      {data.results.length > 0 ? (
        <Allmovies data={data} />
      ) : (
        <div className="text-white text-center p-4">No movies found.</div>
      )}
      <div className="flex justify-center py-6">
        <Pagination
          count={data?.total_pages <= 500 ? data?.total_pages : 500}
          page={page}
          onChange={handleChange}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white", 
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "white", 
              color: "#C61F1F", 
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "#C61F1F", 
              color: "white",
            },
          }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Latest;
