import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { request } from "@/api";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { useQuery } from "@tanstack/react-query";
import Movies from "@/components/movies/Movies";
import Allmovies from "@/components/AllMovies/Allmovies";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data } = useQuery({
    queryKey: ["search", searchValue],
    queryFn: () =>
      request
        .get("/search/movie", {
          params: {
            query: searchValue,
          },
        })
        .then((res) => res.data),
        
  });
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchValue);
    
  }

  return (
    <div className="bg-black">
      <div className="mb-8">
        <Header />
      </div>
      <div className="container mb-8">
        <form onSubmit={handleSearch} className="border max-w-[800px] mx-auto h-10 flex " action="">
          <ReactTyped
            strings={["Avengers", "Venom", "Avatar", "Spiderman"]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
            loop
            className="flex-1"
          >
            <input
              className="h-full outline-none w-full indent-3 placeholder:text-red-500"
              type="text"
              value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
          </ReactTyped>
          <button className="w-10 grid place-items-center text-red-500  bg-slate-200">
            <FaSearch />
          </button>
        </form>
      </div>
      <div>
        <Allmovies data={data} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Search;
