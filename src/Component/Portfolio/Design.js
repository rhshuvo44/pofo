import React from "react";

const Design = () => {
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
          <div className="col-md-3">
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

export default Design;
