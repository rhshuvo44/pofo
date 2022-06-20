import { FaPlayCircle } from "react-icons/fa";
import "./Development.css";

const Development = () => {
  return (
    <section className=" development">
     <div className="py-5">
     <div className="container py-5">
        <div className="row flex-row-reverse">
          <div className="col-md-5">
            <div class="">
              <div class="card-body">
                <p class="top-title">Wide range of web development services</p>
                <h5>Responsive, convenient and multipurpose theme</h5>
                <p class="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since. Lorem Ipsum has been the
                  industry's standard dummy text ever since. Lorem Ipsum is
                  printing and typesetting simply dummy text.
                </p>
              </div>
              <div class="card-body">
                <button type="button" class="btn info-btn mb-3">
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
     <div className="container">
     <hr/>

     </div>
    </section>
  );
};

export default Development;
