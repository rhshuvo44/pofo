import { FaPlayCircle } from "react-icons/fa";
import "./Banner.css";


const Banner = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide banner text-center"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
        <div className="slider-1 d-flex justify-content-center align-items-center text-white">
            <div class="slider-info d-none d-md-block">
              <p>we work hard, we play hard</p>
              <h1>
                We are delivering <br />
                beautiful products
              </h1>
              <button type="button" class="btn info-btn mb-3">
                  <FaPlayCircle /> Explore Work
                </button>
            </div>
          </div>
        </div>
        <div class="carousel-item">
        <div className="slider-2 d-flex justify-content-center align-items-center text-white">
            <div class="slider-info d-none d-md-block">
              <p>we work hard, we play hard</p>
              <h1>
                We are delivering <br />
                beautiful products
              </h1>
              <button type="button" class="btn info-btn mb-3">
                  <FaPlayCircle /> Explore Work
                </button>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div className="slider-3 d-flex justify-content-center align-items-center text-white">
            <div class="slider-info d-none d-md-block">
              <p>we work hard, we play hard</p>
              <h1>
                We are delivering <br />
                beautiful products
              </h1>
              <button type="button" class="btn info-btn mb-3">
                  <FaPlayCircle /> Explore Work
                </button>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
