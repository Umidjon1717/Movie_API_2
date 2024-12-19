import React, { memo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import MovieItem from "./MovieItem";
import AdsItems from "./AdsItems";
import { request } from "@/api";

const Movies = ({ data }) => {
  console.log(data);
  if (!data) {
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

  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
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
