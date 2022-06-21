import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import "./Video.css";
import play from "../../images/icon-play-white.png";

const Video = () => {
  return (
    <section className="video-section">
      <div className="container p-5 text-center">
        <div className="col-md-8 m-auto py-5">
          <a
            className=""
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="mb-4" src={play} alt="" />
          </a>
          <div className="text-center">
            <h1 className="text-white mb-4 ">
              Beautiful and easy to use UI, professional animations and drag &
              drop feature
            </h1>
            <p style={{ color: "#939393" }}>
              With years of experience in the website design and development
              industry ThemeZaa pride ourselves on creating unique, creative and
              quality designs that are developed upon the latest modern coding
              and developing techniques, which are then built using the most up
              to date, structured coding framework so that your development team
              can take it to the next level with eas
            </p>
            <button type="button" class="btn video-btn mb-3">
              <FaPlayCircle /> ALL ADVANTAGES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
