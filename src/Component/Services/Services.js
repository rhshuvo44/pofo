import "./Services.css";

const Services = () => {
  return (
    <section
      id="services"
      className="py-5 text-center  wow animate__animated  animate__fadeIn"
      style={{ visibility: "visible", animationName: "fadeIn" }}
    >
      <div className="container">
        <p>WHAT WE DO</p>
        <h1>OUR SERVICES</h1>
        <hr className="divider" />
        <div className="row mt-5">
          <div className="col-md-4">
            <div
              className=" wow animate__animated  animate__fadeUp"
              style={{ visibility: "visible", animationName: "fadeUp" }}
            >
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="https://i.ibb.co/vPDLF0g/image-4.jpg"
                      className="card-img-top "
                      alt="..."
                    />
                  </div>
                  <div className="flip-card-back">
                    <p className="card-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Design and Development</h5>
                <p className="card-text">600+ We created web design</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className=" wow animate__animated  animate__fadeUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeIn",
              }}
            >
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="https://i.ibb.co/9TfjF2T/blog-img1.jpg"
                      className="card-img-top "
                      alt="..."
                    />
                  </div>
                  <div className="flip-card-back">
                    <p className="card-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Social Media Marketing</h5>
                <p className="card-text">475+ We completed marketing</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className=" wow animate__animated  animate__fadeUp"
              data-wow-delay="0.4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeIn",
              }}
            >
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="https://i.ibb.co/mqMQ7Rt/blog-img2.jpg"
                      className="card-img-top "
                      alt="..."
                    />
                  </div>
                  <div className="flip-card-back">
                    <p className="card-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Mobile App Development</h5>
                <p className="card-text">475+ We created mobile app</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
