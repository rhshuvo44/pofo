import React from "react";

const Photography = () => {
  return (
    <section
      className="p-4 wow animate__animated  animate__fadeIn"
      style={{
        visibility: "visible",
        animationName: "fadeIn",
      }}
    >
      <div className="container-fuild">
        <div className="row">
          <div className="col-md-3 ">
            <div
              className=" wow animate__animated  animate__fadeUp"
              style={{
                visibility: "visible",
                animationName: "fadeUp",
              }}
            >
              <div className="portfolio-card">
                <div className="portfolio-card-inner">
                  <div className="portfolio-card-front">
                    <img
                      src="https://i.ibb.co/nnVpN4S/portfolio-item171.jpg"
                      className="card-img-top "
                      alt="..."
                    />
                  </div>
                </div>
                <div className="portfolio-card-back ">
                  <h5 className="card-title">naked soap</h5>
                  <p className="card-text">WEB AND PHOTOGRAPHY</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 ">
            <div
              className=" wow animate__animated  animate__fadeUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeUp",
              }}
            >
              <div className="portfolio-card">
                <div className="portfolio-card-inner">
                  <div className="portfolio-card-front">
                    <img
                      src="https://i.ibb.co/0cfw8qL/portfolio-item175.jpg"
                      className="card-img-top "
                      alt="..."
                    />
                  </div>
                </div>
                <div className="portfolio-card-back ">
                  <h5 className="card-title">trabag collection</h5>
                  <p className="card-text">web and photography</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className=" wow animate__animated  animate__fadeUp"
              data-wow-delay="0.4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeUp",
              }}
            >
              <div className="portfolio-card">
                <div className="portfolio-card-inner">
                  <div className="portfolio-card-front">
                    <img
                      src="https://i.ibb.co/FV74Pvj/portfolio-item186.jpg"
                      className="card-img-top img-fuild"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="portfolio-card-back">
                  <h5 className="card-title">violaor series</h5>
                  <p className="card-text">web and photography</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photography;
