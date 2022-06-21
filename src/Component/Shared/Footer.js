import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagramSquare,
  FaCaretRight,
} from "react-icons/fa";
import "./Footer.css";
import blog1 from "../../images/blog-img49.jpg";
import blog2 from "../../images/blog-img50.jpg";
import blog3 from "../../images/blog-img51.jpg";

const Footer = () => {
  return (
    <footer>
      <div
        className="footer-top text-white"
        style={{ backgroundColor: "#141414" }}
      >
        <div className="container">
          <div className="row py-5">
            <div className="col-md-4">
              <p style={{ color: "#939393", lineHeight: "20px" }}>London based highly creative studio</p>
            </div>
            <div className="col-md-4">
              <img src="https://i.ibb.co/7YfSxrr/logo-white.png" alt="" />
            </div>
            <div className="col-md-4 d-flex">
              <p style={{ color: "#939393", lineHeight: "20px" }} className="mt-2">On social networks</p>

              <div style={{ fontSize: 20, color: "white" }}>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="mx-2 footer-icon" />
                </a>

                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="mx-2 footer-icon" />
                </a>

                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaGooglePlusG className="mx-2 footer-icon" />
                </a>

                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaInstagramSquare className="mx-2 footer-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#1C1C1C" }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-md-3">
                <h6
                  style={{ color: "#939393", fontSize: 12, lineHeight: "20px" }}
                >
                  ABOUT AGENCY
                </h6>
                <p
                  style={{
                    color: "#939393",
                    fontSize: 12,
                    lineHeight: "20px",
                    paddingRight: 10,
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  industry. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  and typesetting industry.
                </p>
              </div>

              <div className="col-md-3">
                <h6
                  style={{ color: "#939393", fontSize: 12, lineHeight: "20px" }}
                >
                  LATEST BLOG POST
                </h6>

                <div className="row">
                  <div className="col-md-12 d-flex align-items-center">
                    <div className="col-md-2 ">
                      <img style={{width:60}} src={blog1} class="img-fluid" alt="..." />
                    </div>
                    <div className="col-md-10 mx-2">
                      <a className="footer-blog-title" href="w">
                        Design is not just what looks...
                      </a>
                      <p style={{ color: "#939393", fontSize: 10 }}>
                        20 April 2017 |{" "}
                        <a className="footer-blog-author" href="s">
                          by Herman Miller
                        </a>
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="col-12 d-flex align-items-center">
                    <div className="col-2">
                      <img style={{width:60}} src={blog1} class="img-fluid" alt="..." />
                    </div>
                    <div className="col-10 mx-2">
                      <a className="footer-blog-title" href="w">
                        Design is not just what looks...
                      </a>
                      <p style={{ color: "#939393", fontSize: 10 }}>
                        20 April 2017 |{" "}
                        <a className="footer-blog-author" href="s">
                          by Herman Miller
                        </a>
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="col-md-12 d-flex  align-items-center">
                    <div className="col-md-2">
                      <img style={{width:60}} src={blog1} class="img-fluid" alt="..." />
                    </div>
                    <div className="col-md-10 mx-2">
                      <a className="footer-blog-title" href="w">
                        Design is not just what looks...
                      </a>
                      <p style={{ color: "#939393", fontSize: 10 }}>
                        20 April 2017 |{" "}
                        <a className="footer-blog-author" href="s">
                          by Herman Miller
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <h6
                  style={{ color: "#939393", fontSize: 12, lineHeight: "20px" }}
                >
                  SUBSCRIBE NEWSLETTER
                </h6>
                <p
                  style={{
                    color: "#939393",
                    fontSize: 12,
                    lineHeight: "20px",
                    paddingRight: 10,
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry
                </p>
                <div class="input-group mb-3">
                  <input
                    style={{ backgroundColor: "transparent" }}
                    type="text"
                    class="form-control"
                    placeholder="Enter your email"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">
                      <FaCaretRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <h6
                  style={{ color: "#939393", fontSize: 12, lineHeight: "20px" }}
                >
                  FOLLOW US INSTAGRAM
                </h6>
                <div className="row">
                  <div className="col-md-4">
                    <div class="footer-box">
                      <div className="footer-img">
                        <img
                          src="https://scontent.cdninstagram.com/v/t51.29350-15/233600294_360999352162112_4596019890862215645_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=xfQKD40Cz8oAX8MuWHI&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT98yJ_vRLhDADrZKIHbzFozI6sfZeLQA8N_z2rY8y1_CA&oe=62B68FC7"
                          class="card-img-top "
                          alt="..."
                        />
                      </div>
                      <div className="footer-box-info">
                        <p class="card-text">
                          <FaInstagramSquare />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="footer-box">
                      <div className="footer-img">
                        <img
                          src="https://scontent.cdninstagram.com/v/t51.29350-15/232554828_570855994045781_6060329773827050792_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=UO7uVbX7uYMAX9EQqv3&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-tOX3NjNmruILj1mtt73sHQQKbNzZIz4d7UDuFXOWTeg&oe=62B6AAA7"
                          class="card-img-top "
                          alt="..."
                        />
                      </div>
                      <div className="footer-box-info">
                        <p class="card-text">
                          <FaInstagramSquare />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="footer-box">
                      <div className="footer-img">
                        <img
                          src="https://scontent.cdninstagram.com/v/t51.29350-15/232030529_794257824600226_7097279079309172508_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=CjwT4KjTwpgAX-OCEsd&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-REUTlgb7SvMFauDtnswhUEhu3W_a9vIPL55_9tOxx8A&oe=62B5CB88"
                          class="card-img-top "
                          alt="..."
                        />
                      </div>
                      <div className="footer-box-info">
                        <p class="card-text">
                          <FaInstagramSquare />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="footer-box">
                      <div className="footer-img">
                        <img
                          src="https://scontent.cdninstagram.com/v/t51.29350-15/233545360_370885884554432_5291113998038922290_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=_ZBiCIiXvVwAX-cyWSY&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_uCYGKKGzWVu2dUIZQcN692mev0_JYhAn2mwZMA5OSvA&oe=62B61D87"
                          class="card-img-top "
                          alt="..."
                        />
                      </div>
                      <div className="footer-box-info">
                        <p class="card-text">
                          <FaInstagramSquare />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="footer-box">
                      <div className="footer-img">
                        <img
                          src="https://scontent.cdninstagram.com/v/t51.29350-15/234085738_876019386338503_3483067604605621330_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=e9c7PlOVUwIAX-nSWlr&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-pkLq9-vyLOPk1TTnPYc6fU9BchgrJpEAsMbf0-qUK5g&oe=62B693A6"
                          class="card-img-top "
                          alt="..."
                        />
                      </div>
                      <div className="footer-box-info">
                        <p class="card-text">
                          <FaInstagramSquare />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="footer-box">
                      <div className="footer-img">
                        <img
                          src="https://scontent.cdninstagram.com/v/t51.29350-15/234074107_332394125260773_7160167040315339994_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=22rFyzlF9TcAX-WoSUy&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_ZwVHPRkErsWhTWhAmOuYzjafr5IGpXN7aYAq575zhFQ&oe=62B70CDD"
                          class="card-img-top "
                          alt="..."
                        />
                      </div>
                      <div className="footer-box-info">
                        <p class="card-text">
                          <FaInstagramSquare />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row footer-buttom">
              <div className="col-md-6">
                <p>POFO - Creative Agency</p>
              </div>
              <div className="col-md-6 d-flex justify-content-end">
                <p>&copy; 2022 POFO is Proudly Powered by ThemeZaa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
