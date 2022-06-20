import { BsScissors } from "react-icons/bs";
import { FaLayerGroup, FaLock, FaTools } from "react-icons/fa";
import "./Feature.css";

const Feature = () => {
  return (
    <section className="py-5 text-center">
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
            <div class="card mb-3">
              <div className="card-img-top text-white icon my-5">
                <FaTools />
              </div>
              <div class="card-body mb-5">
                <h6 class="card-title">Pixel Perfect Design</h6>
                <p class="card-text">
                  Lorem Ipsum is simply text of the printing and typesetting
                  industry. Lorem Ipsum has been standard dummy
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card mb-3">
              <div className="card-img-top text-white icon my-5">
                <FaLayerGroup />
              </div>
              <div class="card-body mb-5">
                <h6 class="card-title">Full Documentation</h6>
                <p class="card-text">
                  Lorem Ipsum is simply text of the printing and typesetting
                  industry. Lorem Ipsum has been standard dummy
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card mb-3">
              <div className="card-img-top text-white icon my-5">
                <BsScissors />
              </div>
              <div class="card-body mb-5">
                <h6 class="card-title">Reasonable Pricing</h6>
                <p class="card-text">
                  Lorem Ipsum is simply text of the printing and typesetting
                  industry. Lorem Ipsum has been standard dummy
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card mb-3">
              <div className="card-img-top text-white icon my-5">
                <FaLock />
              </div>
              <div class="card-body mb-5">
                <h6 class="card-title">User-friendly Admin</h6>
                <p class="card-text">
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
