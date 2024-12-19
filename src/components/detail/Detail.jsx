import { request } from "@/api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    request
      .get(`/movie/${id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch movie details:", error);
      });
  }, [id]);

  if (!movie) {
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

  const {
    title,
    poster_path,
    backdrop_path,
    tagline,
    overview,
    genres,
    release_date,
    runtime,
    production_companies,
    spoken_languages,
    vote_average,
    vote_count,
    homepage,
  } = movie;

  return (
    <div className="bg-black">
      <Header />
      <div className="flex flex-col items-center bg-black text-white min-h-screen py-10 px-4">
        <div
          className="w-full h-[800px] bg-cover bg-center rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          style={{
            backgroundImage: `url(${
              import.meta.env.VITE_IMAGE_URL
            }${backdrop_path})`,
          }}
        ></div>

        <div className="max-w-4xl mt-8 space-y-8">
          <h1 className="text-5xl font-extrabold mb-2 text-center text-gradient">
            {title}
          </h1>
          {tagline && (
            <p className="text-xl italic text-gray-400 text-center">
              "{tagline}"
            </p>
          )}

          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <img
              src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`}
              alt={title}
              className="w-96 h-auto rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
            />

            <div className="space-y-6">
              <h2 className="text-4xl text-[#C61F1F] font-semibold mb-4 border-b-4 border-[#C61F1F] pb-2">
                Overview
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {overview}
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-200">
                    Genres:
                  </h3>
                  <p className="text-gray-400">
                    {genres.map((genre) => genre.name).join(", ")}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h3 className="font-medium text-gray-200">Release Date:</h3>
                    <p className="text-gray-400">
                      {new Date(release_date).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-200">Runtime:</h3>
                    <p className="text-gray-400">{runtime} minutes</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-200">Rating:</h3>
                    <p className="text-gray-400">
                      {vote_average} / 10 ({vote_count} votes)
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-200">Languages:</h3>
                    <p className="text-gray-400">
                      {spoken_languages
                        .map((lang) => lang.english_name)
                        .join(", ")}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-200">
                    Production Companies:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    {production_companies.map((company) => (
                      <li key={company.id}>{company.name}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {homepage && (
                <div className="mt-4">
                  <a
                    href={homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C61F1F] hover:underline text-lg font-medium transition-all duration-200"
                  >
                    Official Website
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Footer />
      </div>
    </div>
  );
};

export default Detail;
