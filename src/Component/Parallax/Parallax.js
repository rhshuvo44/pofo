import { FiMonitor } from "react-icons/fi";
import { GoBook } from "react-icons/go";
import { FaWallet, FaCamera } from "react-icons/fa";
import "./Parallax.css";

const Parallax = () => {
  return (
    <section className="parallax py-5">
      <div className="container-fuild">
        <div className="row">
          <div class="parallax-box mb-3">
            <div class="row flex-row-reverse g-0">
              <div class="col-md-6 col-12">
                <img
                  src="https://i.ibb.co/30M5L1g/services-classic-07.jpg"
                  class="img-fluid"
                  alt="..."
                />
              </div>
              <div class="col-md-6 col-12">
                <div class="card-body p-5">
                <h1 class="card-title mb-5">
                    We are delivering beautiful digital products for you
                  </h1>
                  <div className="row">
                    <div className="col-md-6">
                      <div class=" mb-3">
                        <div class="row g-0">
                          <div class="col-md-2">
                          <div className="parallax-icon">
                            <FiMonitor />
                            </div>
                          </div>
                          <div class="col-md-10">
                            <div class="card-body">
                              <p class="fw-bold">Powerful Website Builder</p>
                              <p class="card-text">
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
                      <div class=" mb-3">
                        <div class="row g-0">
                          <div class="col-md-2">
                          <div className="parallax-icon">
                            <GoBook />
                            </div>
                          </div>
                          <div class="col-md-10">
                            <div class="card-body">
                              <p style={{ fontSize: 14 }} class="fw-bold">
                                Different Layout Type
                              </p>
                              <p class="card-text">
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
                      <div class=" mb-3">
                        <div class="row g-0">
                          <div class="col-md-2">
                          <div className="parallax-icon">
                            <FaWallet />
                            </div>
                          </div>
                          <div class="col-md-10">
                            <div class="card-body">
                              <p style={{ fontSize: 14 }} class="fw-bold">
                                True Responsiveness
                              </p>
                              <p class="card-text">
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
                      <div class=" mb-3">
                        <div class="row g-0">
                          <div class="col-md-2">
                            <div className="parallax-icon">
                            <FaCamera />
                            </div>
                          </div>
                          <div class="col-md-10">
                            <div class="card-body">
                              <p style={{ fontSize: 13 }} class="fw-bold">
                                Elegant / Unique design
                              </p>
                              <p class="card-text">
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
