import { FaCheck, FaPlayCircle } from "react-icons/fa";
import "./Functional.css";

const Functional = () => {
  return (
    <section className="py-5 functional">
      <div className="container-fuild p-5">
        <div className="row flex-row-reverse">
          <div className="col-md-5">
            <div className="">
              <div className="card-body">
                <h5 className="card-title text-white">
                  Unique, truly responsive and functional websites
                </h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since. Lorem Ipsum has been the
                  industry's standard dummy text.
                </p>
              </div>
              <ul className="list-group list-group-flush functional-info">
                <li className="list-group-item">
                  <FaCheck color="red" /> Beautiful and easy to understand UI,
                  professional animations
                </li>
                <li className="list-group-item">
                  <FaCheck color="red" /> Theme advantages are pixel perfect
                  design & clear code delivered
                </li>
                <li className="list-group-item">
                  <FaCheck color="red" /> Present your services with flexible,
                  convenient and multipurpose
                </li>
                <li className="list-group-item">
                  <FaCheck color="red" /> Unlimited power and customization
                  possibilities
                </li>
              </ul>
              <div className="card-body">
                <button type="button" className="btn functional-btn mb-3">
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
