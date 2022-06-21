import { FaLayerGroup, FaTools } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container-fuild">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6 col-12">
            <h5>Easy way to build perfect websites</h5>
            <h1>Beautifully handcrafted templates for your website</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the 's standard dummy text. Lorem
              Ipsum has been the industry's standard dummy text ever since.
              Lorem Ipsum is simply dummy text.
            </p>
            <div className="row">
              <div className="col-md-6 col-12">
                <div>
                  <div className="card-img-top about-icon mt-5 ">
                    <FaTools />
                  </div>
                  <div className="pe-5 mb-5">
                    <h6 className="card-title">Pixel Perfect Design</h6>
                    <p className="card-text m-0">
                      Lorem Ipsum is simply text of the printing and typesetting
                      industry. Lorem Ipsum has been standard dummy
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div>
                  <div className="card-img-top about-icon mt-5">
                    <FaLayerGroup />
                  </div>
                  <div className="pe-5 mb-5">
                    <h6 className="card-title">Pixel Perfect Design</h6>
                    <p className="card-text">
                      Lorem Ipsum is simply text of the printing and typesetting
                      industry. Lorem Ipsum has been standard dummy
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

export default About;
