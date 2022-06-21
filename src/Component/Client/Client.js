import { A11y, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Client.css";

import avatar1 from "../../images/avtar-13.jpg";
import avatar2 from "../../images/avtar-14.jpg";
import avatar3 from "../../images/avtar-15.jpg";
import avatar4 from "../../images/avtar-16.jpg";

const Client = () => {
  return (
    <section id="client" className="py-5 client text-center">
      <div className="container py-5">
        <p style={{ color: "#939393" }}>WHAT PEOPLE SAY</p>
        <h1>CLIENTS WORDS</h1>
        <hr className="divider" />
        <div className="mt-5">
          <Swiper
            // install Swiper modules
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide style={{ height: 450 }}>
              <div className="card p-4">
                <div className="client-img">
                  <img src={avatar1} className="card-img-top img-fuild" alt="..." />
                </div>

                <div className="card-body">
                  <p className="card-text">
                    I wanted to hire the best and after looking at several other
                    companies, I knew Jacob was the perfect guy for the job. He
                    is a true professional.
                  </p>
                  <h5 className="card-title">Shoko Mugikura</h5>
                  <p className="card-text">Design Manager</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card p-4">
                <div className="client-img">
                  <img src={avatar2} className="card-img-top img-fuild" alt="..." />
                </div>

                <div className="card-body">
                  <p className="card-text">
                    I wanted to hire the best and after looking at several other
                    companies, I knew Jacob was the perfect guy for the job. He
                    is a true professional.
                  </p>
                  <h5 className="card-title">Shoko Mugikura</h5>
                  <p className="card-text">Design Manager</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card p-4">
                <div className="client-img">
                  <img src={avatar3} className="card-img-top img-fuild" alt="..." />
                </div>

                <div className="card-body">
                  <p className="card-text">
                    I wanted to hire the best and after looking at several other
                    companies, I knew Jacob was the perfect guy for the job. He
                    is a true professional.
                  </p>
                  <h5 className="card-title">Shoko Mugikura</h5>
                  <p className="card-text">Design Manager</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card p-4">
                <div className="client-img">
                  <img src={avatar4} className="card-img-top img-fuild" alt="..." />
                </div>

                <div className="card-body">
                  <p className="card-text">
                    I wanted to hire the best and after looking at several other
                    companies, I knew Jacob was the perfect guy for the job. He
                    is a true professional.
                  </p>
                  <h5 className="card-title">Shoko Mugikura</h5>
                  <p className="card-text">Design Manager</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Client;
