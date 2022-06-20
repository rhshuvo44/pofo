import { FaPlayCircle } from "react-icons/fa";
import "./Service.css";

const Service = () => {
  return (
    <section className="py-5 service ">
      <div className="container-fuild">
        <div class="row g-0">
          <div className="col-md-6 service-box">
            <div class=" mb-3">
              <div class="row g-0">
                <div class="col-md-6  service-img">
                  <img
                    src="https://i.ibb.co/XJbkwTT/homepage-option17-image-01.jpg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-6">
                  <div class="card-body bg-dark py-4 px-5">
                    <p class="text-muted">Build perfect websites</p>
                    <h5
                      style={{ fontSize: 27 }}
                      class="card-title text-white mb-4"
                    >
                      Unlimited power and customization possibilities
                    </h5>
                    <p class="card-text text-muted">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since. Lorem Ipsum has been the
                      industry's standard dummy text ever since. Lorem Ipsum is
                      simply dummy text.
                    </p>
                    <p class="card-text">
                      <button type="button" class="btn btn-outline-light mb-3">
                        <FaPlayCircle /> READ MORE
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div class=" mb-3">
              <div class="row g-0">
                <div class="col-md-6 service-img">
                  <img
                    src="https://i.ibb.co/jgTDH5C/homepage-option17-image-02.jpg"
                    class="img-fluid"
                    alt="..."
                  />
                </div>
                <div class="col-md-6">
                  <div class="card-body bg-dark py-4 px-5">
                    <p class="text-muted">Unique digital experiences</p>
                    <h5
                      style={{ fontSize: 27 }}
                      class="card-title text-white mb-4"
                    >
                      Pixel perfect design and clear code delivered to you
                    </h5>
                    <p class="card-text text-muted">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since. Lorem Ipsum has been the
                      industry's standard dummy text ever since. Lorem Ipsum is
                      simply dummy text.
                    </p>
                    <p class="card-text">
                      <button type="button" class="btn btn-outline-light mb-3">
                        <FaPlayCircle /> READ MORE
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-md-3">
            <img src="" alt="" />
          </div>
          <div className="col-md-3">
            <div className="box bg-dark p-5">
              <h6 style={{color:'gray'}}>Build perfect websites</h6>
              <h3 style={{fontSize:25}} className="text-white my-4">Unlimited power and customization possibilities</h3>
              <p style={{color:'gray' , }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since. Lorem Ipsum has been the industry's standard
                dummy text ever since. Lorem Ipsum is simply dummy text.
              </p>
              <button type="button" class="btn btn-outline-light mt-2"><FaPlayCircle/> READ MORE</button>
            </div>
          </div>
          <div className="col-md-3">
            <img src="" alt="" />
          </div>
          <div className="col-md-3">
          <div className="box bg-dark p-5">
              <h6 style={{color:'gray'}}>Unique digital experiences</h6>
              <h3 style={{fontSize:25}} className="text-white my-4">Pixel perfect design and clear code delivered to you</h3>
              <p style={{color:'gray' , }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since. Lorem Ipsum has been the industry's standard
                dummy text ever since. Lorem Ipsum is simply dummy text.
              </p>
              <button type="button" class="btn btn-outline-light mt-2"><FaPlayCircle/> READ MORE</button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Service;