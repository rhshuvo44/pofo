import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="py-5 text-center">
      <div className="container">
        <p>WHAT WE DO</p>
        <h1>OUR SERVICES</h1>
        <hr className="divider" />
        <div className="row mt-5">
          <div className="col-md-4">
            <div class="">
              <div className="services-box">
                <div className="services-img">
                  <img
                    src="https://i.ibb.co/vPDLF0g/image-4.jpg"
                    class="card-img-top "
                    alt="..."
                  />
                </div>
                <div className="services-info">
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Design and Development</h5>
                <p class="card-text">
                600+ We created web design
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div class="">
              <div className="services-box">
                <div className="services-img">
                  <img
                    src="https://i.ibb.co/9TfjF2T/blog-img1.jpg"
                    class="card-img-top "
                    alt="..."
                  />
                </div>
                <div className="services-info">
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Social Media Marketing</h5>
                <p class="card-text">
                475+ We completed marketing
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div class="">
              <div className="services-box">
                <div className="services-img">
                  <img
                    src="https://i.ibb.co/mqMQ7Rt/blog-img2.jpg"
                    class="card-img-top "
                    alt="..."
                  />
                </div>
                <div className="services-info">
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Mobile App Development</h5>
                <p class="card-text">
                475+ We created mobile app
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
