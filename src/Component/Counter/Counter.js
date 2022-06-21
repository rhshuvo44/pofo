import CountUp from "react-countup";
import { FaCamera, FaLaptop } from "react-icons/fa";
import { FiMessageCircle, FiMonitor } from "react-icons/fi";
import './Counter.css';
const Counter = () => {
  return (
    <section className="py-5 counter">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className=" mb-3">
              <div className="row g-0">
                <div className="col-md-2">
                  <div style={{ fontSize: 40 }}>
                    <FiMonitor />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="card-title">
                      <CountUp end={350} />
                    </h5>
                    <p className="card-text">HAPPY CLIENTS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className=" mb-3">
              <div className="row g-0">
                <div className="col-md-2">
                  <div style={{ fontSize: 40 }}>
                    <FaCamera />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="card-title">
                      <CountUp end={780} />
                    </h5>
                    <p className="card-text">PHOTO CAPTURE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className=" mb-3">
              <div className="row g-0">
                <div className="col-md-2">
                  <div style={{ fontSize: 40 }}>
                    <FaLaptop />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="card-title">
                      <CountUp end={850} />
                    </h5>
                    <p className="card-text">WORK COMPLETED</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className=" mb-3">
              <div className="row g-0">
                <div className="col-md-2">
                  <div style={{ fontSize: 40 }}>
                    <FiMessageCircle />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="card-title">
                      <CountUp end={650} />
                    </h5>
                    <p className="card-text">TELEPHONIC TALK</p>
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
