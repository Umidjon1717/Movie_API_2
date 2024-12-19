import React, { memo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import MovieItem from "./MovieItem";
import AdsItems from "./AdsItems";
import { request } from "@/api";

const Movies = ({ data }) => {
  console.log(data);

 

  return (
    <>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="container"
      >
        {data?.results?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <AdsItems {...movie} />
            
          </SwiperSlide>
        ))}
        <div className="swiper-button-next" style={{ color: "#ff0000" }}></div>
        <div className="swiper-button-prev" style={{ color: "#ff0000" }}></div>
      </Swiper>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        className="container mt-48"
      >
        {data?.results?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieItem {...movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default memo(Movies);
