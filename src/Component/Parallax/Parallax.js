import { FaCamera, FaWallet } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { GoBook } from "react-icons/go";
import "./Parallax.css";

const Parallax = () => {
  return (
    <section className="parallax py-5">
      <div className="container-fuild">
        <div className="row">
          <div className="parallax-box mb-3">
            <div className="row flex-row-reverse g-0">
              <div className="col-md-6 col-12">
                <img
                  src="https://i.ibb.co/30M5L1g/services-classic-07.jpg"
                  className="img-fluid"
                  alt="..."
                />
              </div>
              <div className="col-md-6 col-12">
                <div className="card-body p-5">
                  <h1 className="card-title mb-5">
                    We are delivering beautiful digital products for you
                  </h1>
                  <div className="row">
                    <div className="col-md-6">
                      <div className=" mb-3">
                        <div className="row g-0">
                          <div className="col-md-2">
                            <div className="parallax-icon">
                              <FiMonitor />
                            </div>
                          </div>
                          <div className="col-md-10">
                            <div className="card-body">
                              <p className="fw-bold">Powerful Website Builder</p>
                              <p className="card-text">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className=" mb-3">
                        <div className="row g-0">
                          <div className="col-md-2">
                            <div className="parallax-icon">
                              <GoBook />
                            </div>
                          </div>
                          <div className="col-md-10">
                            <div className="card-body">
                              <p style={{ fontSize: 14 }} className="fw-bold">
                                Different Layout Type
                              </p>
                              <p className="card-text">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className=" mb-3">
                        <div className="row g-0">
                          <div className="col-md-2">
                            <div className="parallax-icon">
                              <FaWallet />
                            </div>
                          </div>
                          <div className="col-md-10">
                            <div className="card-body">
                              <p style={{ fontSize: 14 }} className="fw-bold">
                                True Responsiveness
                              </p>
                              <p className="card-text">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className=" mb-3">
                        <div className="row g-0">
                          <div className="col-md-2">
                            <div className="parallax-icon">
                              <FaCamera />
                            </div>
                          </div>
                          <div className="col-md-10">
                            <div className="card-body">
                              <p style={{ fontSize: 13 }} className="fw-bold">
                                Elegant / Unique design
                              </p>
                              <p className="card-text">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Parallax;
