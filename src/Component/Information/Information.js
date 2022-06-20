import React from "react";
import { FaPlayCircle, FaCheck } from "react-icons/fa";
import "./Information.css";

const Information = () => {
  return (
    <section className="py-5 information">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div class="">
              <div class="card-body">
                <h5 class="card-title">
                  Beautifully handcrafted templates for your website
                </h5>
              </div>
              <ul class="list-group list-group-flush info-group">
                <li class="list-group-item">
                  <FaCheck /> Beautiful and easy to understand UI, professional
                  animations
                </li>
                <li class="list-group-item">
                  <FaCheck /> Theme advantages are pixel perfect design & clear
                  code delivered
                </li>
                <li class="list-group-item">
                  <FaCheck /> Present your services with flexible, convenient
                  and multipurpose
                </li>
                <li class="list-group-item">
                  <FaCheck /> Find more creative ideas for your projects
                </li>
                <li class="list-group-item">
                  <FaCheck /> Unlimited power and customization possibilities
                </li>
              </ul>
              <div class="card-body">
                <button type="button" class="btn info-btn mb-3">
                  <FaPlayCircle /> ALL ADVANTAGES
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <img src="https://i.ibb.co/P95P1jf/explore-work-02.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
