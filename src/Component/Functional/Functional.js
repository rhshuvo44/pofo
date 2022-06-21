import React from "react";
import "./Functional.css";
import { FaPlayCircle, FaCheck } from "react-icons/fa";

const Functional = () => {
  return (
    <section className="py-5 functional">
      <div className="container-fuild p-5">
        <div className="row flex-row-reverse">
          <div className="col-md-5">
            <div class="">
              <div class="card-body">
                <h5 class="card-title text-white">
                  Unique, truly responsive and functional websites
                </h5>
                <p class="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since. Lorem Ipsum has been the
                  industry's standard dummy text.
                </p>
              </div>
              <ul class="list-group list-group-flush functional-info">
                <li class="list-group-item">
                  <FaCheck color="red" /> Beautiful and easy to understand UI,
                  professional animations
                </li>
                <li class="list-group-item">
                  <FaCheck color="red" /> Theme advantages are pixel perfect
                  design & clear code delivered
                </li>
                <li class="list-group-item">
                  <FaCheck color="red" /> Present your services with flexible,
                  convenient and multipurpose
                </li>
                <li class="list-group-item">
                  <FaCheck color="red" /> Unlimited power and customization
                  possibilities
                </li>
              </ul>
              <div class="card-body">
                <button type="button" class="btn functional-btn mb-3">
                  <FaPlayCircle /> GET TO KNOW US
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <img
              className="img-fluid"
              src="https://i.ibb.co/LhCVHMm/homepage-option15-image-3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Functional;
