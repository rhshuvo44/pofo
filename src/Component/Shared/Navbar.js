import { useEffect, useState } from "react";
import { FaDribbble, FaFacebookF, FaSearch, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [navSize, setnavSize] = useState("");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("sticky-top") : setnavSize("");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <nav
      style={{
        backgroundColor: navColor,
        transition: "all 1s",
      }}
      className={`navbar menu navbar-expand-lg ${navSize}`}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="https://i.ibb.co/7YfSxrr/logo-white.png" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active  text-white"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active  text-white"
                aria-current="page"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active  text-white"
                aria-current="page"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active  text-white"
                aria-current="page"
                href="#services"
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active  text-white"
                aria-current="page"
                href="#client"
              >
                Client
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active  text-white"
                aria-current="page"
                href="#blog"
              >
                Blog
              </a>
            </li>
          </ul>
          <div className="d-flex  align-items-center text-white">
            <button className="btn px-4 border-end border-start" type="submit">
              <FaSearch color="white" />
            </button>
            <div className="d-flex">
              <div className="px-3">
                <FaFacebookF />
              </div>{" "}
              <div className="px-3">
                <FaTwitter />
              </div>{" "}
              <div className="px-3">
                <FaDribbble />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
