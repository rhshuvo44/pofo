import { FaCheck, FaPlayCircle } from "react-icons/fa";
import "./Information.css";

const Information = () => {
  return (
    <section
      className="py-5 information wow animate__animated  animate__fadeIn"
      style={{ visibility: "visible", animationName: "fadeIn" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="">
              <div className="card-body">
                <h5 className="card-title">
                  Beautifully handcrafted templates for your website
                </h5>
              </div>
              <ul className="list-group list-group-flush info-group">
                <li className="list-group-item">
                  <FaCheck /> Beautiful and easy to understand UI, professional
                  animations
                </li>
                <li className="list-group-item">
                  <FaCheck /> Theme advantages are pixel perfect design & clear
                  code delivered
                </li>
                <li className="list-group-item">
                  <FaCheck /> Present your services with flexible, convenient
                  and multipurpose
                </li>
                <li className="list-group-item">
                  <FaCheck /> Find more creative ideas for your projects
                </li>
                <li className="list-group-item">
                  <FaCheck /> Unlimited power and customization possibilities
                </li>
              </ul>
              <div className="card-body">
                <button type="button" className="btn info-btn mb-3">
                  <FaPlayCircle /> ALL ADVANTAGES
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <img
              src="https://i.ibb.co/P95P1jf/explore-work-02.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
