import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Slide = () => {
  return (
    <div className="container py-5">
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="https://i.ibb.co/Cvxg8F5/logo-1.png" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="https://i.ibb.co/wcMsckC/logo-2.png" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="https://i.ibb.co/HD1HjwS/logo-3.png" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="https://i.ibb.co/XkHghNX/logo-4.png" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="https://i.ibb.co/jwSwSfj/logo-5.png" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="https://i.ibb.co/98bnpZT/logo-6.png" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="https://i.ibb.co/Dgrkwz3/logo-7.png" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="https://i.ibb.co/cv0c5wc/logo-8.png" alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide;