import { FaPlayCircle } from "react-icons/fa";
import "./Banner.css";


const Banner = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide banner text-center"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
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
      <div className="carousel-inner">
        <div className="carousel-item active">
        <div className="slider-1 d-flex justify-content-center align-items-center text-white">
            <div className="slider-info d-none d-md-block">
              <p>we work hard, we play hard</p>
              <h1>
                We are delivering <br />
                beautiful products
              </h1>
              <button type="button" className="btn info-btn mb-3">
                  <FaPlayCircle /> Explore Work
                </button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <div className="slider-2 d-flex justify-content-center align-items-center text-white">
            <div className="slider-info d-none d-md-block">
              <p>we work hard, we play hard</p>
              <h1>
                We are delivering <br />
                beautiful products
              </h1>
              <button type="button" className="btn info-btn mb-3">
                  <FaPlayCircle /> Explore Work
                </button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="slider-3 d-flex justify-content-center align-items-center text-white">
            <div className="slider-info d-none d-md-block">
              <p>we work hard, we play hard</p>
              <h1>
                We are delivering <br />
                beautiful products
              </h1>
              <button type="button" className="btn info-btn mb-3">
                  <FaPlayCircle /> Explore Work
                </button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
