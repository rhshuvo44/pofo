import { BsScissors } from "react-icons/bs";
import { FaLayerGroup, FaLock, FaTools } from "react-icons/fa";
import "./Feature.css";

const Feature = () => {
  return (
    <section
      className="py-5 text-center wow animate__animated animate__fadeIn"
      style={{ visibility: "visible", animationName: "fadeIn" }}
    >
      <div className="container ">
        <div className="row py-4">
          <div className="col-12 col-md-8 m-auto">
            <h2>
              Beautiful and easy to use UI, professional animations and drag &
              drop feature
            </h2>
            <p className="px-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-3">
            <div
              className="card wow animate__animated animate__fadeInUp mb-3"
              style={{
                visibility: "visible",
                animationName: "fadeInUp",
              }}
            >
              <div className="card-img-top text-white icon my-5">
                <FaTools />
              </div>
              <div className="card-body mb-5">
                <h6 className="card-title">Pixel Perfect Design</h6>
                <p className="card-text">
                  Lorem Ipsum is simply text of the printing and typesetting
                  industry. Lorem Ipsum has been standard dummy
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="card wow animate__animated animate__fadeInUp mb-3"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp",
              }}
            >
              <div className="card-img-top text-white icon my-5">
                <FaLayerGroup />
              </div>
              <div className="card-body mb-5">
                <h6 className="card-title">Full Documentation</h6>
                <p className="card-text">
                  Lorem Ipsum is simply text of the printing and typesetting
                  industry. Lorem Ipsum has been standard dummy
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="card wow animate__animated animate__fadeInUp mb-3"
              data-wow-delay="0.4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <div className="card-img-top text-white icon my-5">
                <BsScissors />
              </div>
              <div className="card-body mb-5">
                <h6 className="card-title">Reasonable Pricing</h6>
                <p className="card-text">
                  Lorem Ipsum is simply text of the printing and typesetting
                  industry. Lorem Ipsum has been standard dummy
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="card wow animate__animated animate__fadeInUp mb-3"
              data-wow-delay="0.6s"
              style={{
                visibility: "visible",
                animationDelay: "0.6s",
                animationName: "fadeInUp",
              }}
            >
              <div className="card-img-top text-white icon my-5">
                <FaLock />
              </div>
              <div className="card-body mb-5">
                <h6 className="card-title">User-friendly Admin</h6>
                <p className="card-text">
                  Lorem Ipsum is simply text of the printing and typesetting
                  industry. Lorem Ipsum has been standard dummy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
