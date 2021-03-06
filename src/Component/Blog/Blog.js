import blog1 from "../../images/blog-img49.jpg";
import blog2 from "../../images/blog-img50.jpg";
import blog3 from "../../images/blog-img51.jpg";
import blog4 from "../../images/blog-img52.jpg";
import "./Blog.css";

const Blog = () => {
  return (
    <section id="blog" className="py-5 blog">
      <div
        className="container py-5 wow animate__animated  animate__fadeIn"
        style={{ visibility: "visible", animationName: "fadeIn" }}
      >
        <div className="text-center">
          <p style={{ color: "#939393" }}>PUBLISH WHAT YOU THINK</p>
          <h1>LATEST BLOGS</h1>
        </div>
        <hr className="divider" />
        <div className="mt-5"></div>
        <div className="row">
          <div className="col-md-3">
            <div
              className="blog-card  wow animate__animated  animate__fadeUp my-3"
              style={{ visibility: "visible", animationName: "fadeUp" }}
            >
              <div className="blog-img">
                <img src={blog1} className="card-img-top" alt="..." />
              </div>
              <div>
                <p className="mt-2" style={{ fontSize: 14, color: "#939393" }}>
                  25 APRIL 2017 |{" "}
                  <a href="#f" className="author">
                    BY JAY BENJAMIN
                  </a>
                </p>

                <a href="#f" className="blog-title">
                  I like the body. I like to design everything to do with the
                  body.
                </a>
              </div>
              <hr />
              <div>
                <p style={{ color: "#939393" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum text...
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="blog-card wow animate__animated  animate__fadeUp my-3"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeUp",
              }}
            >
              <div className="blog-img">
                <img src={blog2} className="card-img-top" alt="..." />
              </div>
              <div>
                <p className="mt-2" style={{ fontSize: 14, color: "#939393" }}>
                  25 APRIL 2017 |{" "}
                  <a href="#f" className="author">
                    BY JAY BENJAMIN
                  </a>
                </p>

                <a href="#f" className="blog-title">
                  Styles come and go. Design is a language, not a style.
                </a>
              </div>
              <hr />
              <div>
                <p style={{ color: "#939393" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum text...
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="blog-card wow animate__animated  animate__fadeUp my-3"
              data-wow-delay="0.4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeUp",
              }}
            >
              <div className="blog-img">
                <img src={blog3} className="card-img-top" alt="..." />
              </div>
              <div>
                <p className="mt-2" style={{ fontSize: 14, color: "#939393" }}>
                  25 APRIL 2017 |{" "}
                  <a href="#f" className="author">
                    BY JAY BENJAMIN
                  </a>
                </p>

                <a href="#f" className="blog-title">
                  Recognizing the need is the primary condition for design.
                </a>
              </div>
              <hr />
              <div>
                <p style={{ color: "#939393" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum text...
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="blog-card wow animate__animated  animate__fadeUp my-3"
              data-wow-delay="0.6s"
              style={{
                visibility: "visible",
                animationDelay: "0.6s",
                animationName: "fadeUp",
              }}
            >
              <div className="blog-img">
                <img src={blog4} className="card-img-top" alt="..." />
              </div>
              <div>
                <p className="mt-2" style={{ fontSize: 14, color: "#939393" }}>
                  25 APRIL 2017 |{" "}
                  <a href="#f" className="author">
                    BY JAY BENJAMIN
                  </a>
                </p>

                <a href="#f" className="blog-title">
                  Get in over your head as often and as joyfully as possible.
                </a>
              </div>
              <hr />
              <div>
                <p style={{ color: "#939393" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum text...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
