import { FaPlayCircle } from "react-icons/fa";
import "./Advantage.css";

const Advantage = () => {
  return (
    <section
      className="advantage py-5 wow animate__animated  animate__fadeIn"
      style={{ visibility: "visible", animationName: "fadeIn" }}
    >
      <div className="container-fuild">
        <div className="row">
          <div className="advantage-box mb-3">
            <div className="row flex-row-reverse g-0">
              <div
                className="col-md-6 col-12 wow animate__animated  animate__fadeIn"
                style={{ visibility: "visible", animationName: "fadeIn" }}
              >
                <img
                  src="https://i.ibb.co/T4VNLfk/parallax-bg11.jpg"
                  className="img-fluid"
                  alt="..."
                />
              </div>
              <div className="col-md-6 col-12">
                <div
                  className="advantage-card wow animate__animated  animate__fadeIn"
                  style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                  <div className="card-body">
                    <p className="top-title">
                      We create premium designs and technology
                    </p>
                    <h5>
                      we design brand, digital experience that engage the right
                      customers.
                    </h5>
                    <p className="card-text mt-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since. Lorem Ipsum has been the
                      industry. Lorem Ipsum is simply dummy text of the printing
                      and industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since. Lorem Ipsum has been the industry.
                    </p>
                  </div>
                  <div className="card-body">
                    <button type="button" className="btn info-btn mb-2">
                      <FaPlayCircle /> ALL ADVANTACES
                    </button>
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

export default Advantage;
