import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import "./Advantage.css";

const Advantage = () => {
  return (
    <section className="advantage py-5">
      <div className="container-fuild">
        <div className="row">
          <div class="advantage-box mb-3">
            <div class="row flex-row-reverse g-0">
              <div class="col-md-6 col-12">
                <img
                  src="https://i.ibb.co/T4VNLfk/parallax-bg11.jpg"
                  class="img-fluid"
                  alt="..."
                />
              </div>
              <div class="col-md-6 col-12">
                <div class="advantage-card">
                  <div class="card-body">
                    <p class="top-title">
                      We create premium designs and technology
                    </p>
                    <h5>
                      we design brand, digital experience that engage the right
                      customers.
                    </h5>
                    <p class="card-text mt-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since. Lorem Ipsum has been the
                      industry. Lorem Ipsum is simply dummy text of the printing
                      and industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since. Lorem Ipsum has been the industry.
                    </p>
                  </div>
                  <div class="card-body">
                    <button type="button" class="btn info-btn mb-3">
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
