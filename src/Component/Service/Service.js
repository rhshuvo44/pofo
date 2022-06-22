import { FaPlayCircle } from "react-icons/fa";
import "./Service.css";

const Service = () => {
  return (
    <section
      className="py-5 service wow animate__animated   animate__fadeIn"
      style={{ visibility: "visible", animationName: "fadeIn" }}
    >
      <div className="container-fuild">
        <div className="row g-0">
          <div className="col-md-6 service-box">
            <div className=" mb-3">
              <div className="row g-0">
                <div
                  className="col-md-6 wow animate__animated  animate__fadeIn service-img"
                  style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                  <img
                    src="https://i.ibb.co/XJbkwTT/homepage-option17-image-01.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="col-md-6">
                  <div
                    className="card-body wow animate__animated  animate__fadeIn bg-dark py-4 px-5"
                    data-wow-delay="0.2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeIn",
                    }}
                  >
                    <p className="text-muted">Build perfect websites</p>
                    <h5
                      style={{ fontSize: 27 }}
                      className="card-title text-white mb-4"
                    >
                      Unlimited power and customization possibilities
                    </h5>
                    <p className="card-text text-muted">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since. Lorem Ipsum has been the
                      industry's standard dummy text ever since. Lorem Ipsum is
                      simply dummy text.
                    </p>
                    <p className="card-text">
                      <button
                        type="button"
                        className="btn btn-outline-light mb-3"
                      >
                        <FaPlayCircle /> READ MORE
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className=" mb-3">
              <div className="row g-0">
                <div
                  className="col-md-6 wow animate__animated  animate__fadeIn service-img"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeIn",
                  }}
                >
                  <img
                    src="https://i.ibb.co/jgTDH5C/homepage-option17-image-02.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="col-md-6">
                  <div
                    className="card-body wow animate__animated  animate__fadeIn bg-dark py-4 px-5"
                    data-wow-delay="0.6s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.6s",
                      animationName: "fadeIn",
                    }}
                  >
                    <p className="text-muted">Unique digital experiences</p>
                    <h5
                      style={{ fontSize: 27 }}
                      className="card-title text-white mb-4"
                    >
                      Pixel perfect design and clear code delivered to you
                    </h5>
                    <p className="card-text text-muted">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since. Lorem Ipsum has been the
                      industry's standard dummy text ever since. Lorem Ipsum is
                      simply dummy text.
                    </p>
                    <p className="card-text">
                      <button
                        type="button"
                        className="btn btn-outline-light mb-3"
                      >
                        <FaPlayCircle /> READ MORE
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
