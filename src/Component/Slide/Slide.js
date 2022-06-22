import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Slide = () => {
  return (
    <section className="py-5 ">
      <div
        className="container py-5 wow animate__animated  animate__fadeIn"
        style={{ visibility: "visible", animationName: "fadeIn" }}
      >
        <Swiper
          className="wow animate__animated  animate__fadeIn"
          style={{ visibility: "visible", animationName: "fadeIn" }}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
            },
          }}
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
    </section>
  );
};

export default Slide;
