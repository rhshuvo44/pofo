import React from "react";
import CountUp from "react-countup";
import { FiMonitor, FiMessageCircle } from "react-icons/fi";
import { FaCamera, FaLaptop } from "react-icons/fa";
import './Counter.css'
const Counter = () => {
  return (
    <section className="py-5 counter">
      <div className="container">
        <div class="row">
          <div className="col-md-3">
            <div class=" mb-3">
              <div class="row g-0">
                <div class="col-md-2">
                  <div style={{ fontSize: 40 }}>
                    <FiMonitor />
                  </div>
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="card-title">
                      <CountUp end={350} />
                    </h5>
                    <p class="card-text">HAPPY CLIENTS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class=" mb-3">
              <div class="row g-0">
                <div class="col-md-2">
                  <div style={{ fontSize: 40 }}>
                    <FaCamera />
                  </div>
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="card-title">
                      <CountUp end={780} />
                    </h5>
                    <p class="card-text">PHOTO CAPTURE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class=" mb-3">
              <div class="row g-0">
                <div class="col-md-2">
                  <div style={{ fontSize: 40 }}>
                    <FaLaptop />
                  </div>
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="card-title">
                      <CountUp end={850} />
                    </h5>
                    <p class="card-text">WORK COMPLETED</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class=" mb-3">
              <div class="row g-0">
                <div class="col-md-2">
                  <div style={{ fontSize: 40 }}>
                    <FiMessageCircle />
                  </div>
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="card-title">
                      <CountUp end={650} />
                    </h5>
                    <p class="card-text">TELEPHONIC TALK</p>
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

export default Counter;
