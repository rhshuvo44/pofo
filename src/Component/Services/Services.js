import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="py-5 text-center">
      <div className="container">
        <p>WHAT WE DO</p>
        <h1>OUR SERVICES</h1>
        <hr className="divider" />
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="https://i.ibb.co/vPDLF0g/image-4.jpg"
                      className="card-img-top "
                      alt="..."
                    />
                  </div>
                  <div className="flip-card-back">
                    <p className="card-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Design and Development</h5>
                <p className="card-text">600+ We created web design</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="https://i.ibb.co/9TfjF2T/blog-img1.jpg"
                      className="card-img-top "
                      alt="..."
                    />
                  </div>
                  <div className="flip-card-back">
                    <p className="card-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Social Media Marketing</h5>
                <p className="card-text">475+ We completed marketing</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="https://i.ibb.co/mqMQ7Rt/blog-img2.jpg"
                      className="card-img-top "
                      alt="..."
                    />
                  </div>
                  <div className="flip-card-back">
                    <p className="card-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Mobile App Development</h5>
                <p className="card-text">475+ We created mobile app</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
