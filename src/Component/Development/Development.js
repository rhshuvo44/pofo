import { BsFillGiftFill } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { GoBook } from "react-icons/go";
import "./Development.css";

const Development = () => {
  return (
    <section className=" development">
     <div className="py-5">
     <div className="container py-5">
        <div className="row flex-row-reverse">
          <div className="col-md-5">
            <div className="">
              <div className="card-body">
                <p className="top-title">Wide range of web development services</p>
                <h5>Responsive, convenient and multipurpose theme</h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since. Lorem Ipsum has been the
                  industry's standard dummy text ever since. Lorem Ipsum is
                  printing and typesetting simply dummy text.
                </p>
              </div>
              <div className="card-body">
                <button type="button" className="btn info-btn mb-3">
                  <FaPlayCircle /> ABOUT COMPANY
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <img
              className="img-fluid px-5"
              src="https://i.ibb.co/8Y5bLdz/image-8.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
     </div>
     <div className="container develop-icon">
     <hr className="mb-5"/>
     <div className="row pb-5">
                    <div className="col-md-4">
                      <div className=" mb-3">
                        <div className="row g-0">
                          <div className="col-md-2">
                          <div className="parallax-icon">
                            <FiMonitor />
                            </div>
                          </div>
                          <div className="col-md-10">
                            <div className="card-body">
                              <p className="fw-bold">Modern Framework</p>
                              <p className="card-text">
                              Lorem Ipsum is simply text the printing and typesetting standard industry.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
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
                              Web Interactive
                              </p>
                              <p className="card-text">
                              Lorem Ipsum is simply text the printing and typesetting standard industry.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className=" mb-3">
                        <div className="row g-0">
                          <div className="col-md-2">
                            <div className="parallax-icon">
                            <BsFillGiftFill />
                            </div>
                          </div>
                          <div className="col-md-10">
                            <div className="card-body">
                              <p style={{ fontSize: 13 }} className="fw-bold">
                              Graphic Design
                              </p>
                              <p className="card-text">
                              Lorem Ipsum is simply text the printing and typesetting standard industry.
                              </p>
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

export default Development;
