import { FaDribbble, FaFacebookF, FaTwitter, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav  className="navbar menu navbar-expand-lg bg-transparent ">
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img src="https://i.ibb.co/7YfSxrr/logo-white.png" alt="" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active  text-white" aria-current="page" to="#y">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active  text-white" aria-current="page" to="#y">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active  text-white" aria-current="page" to="#y">
                Portfolio
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active  text-white" aria-current="page" to="#y">
                Services
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active  text-white" aria-current="page" to="#y">
                Client
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active  text-white" aria-current="page" to="#y">
                Blog
              </Link>
            </li>
          </ul>
          <div class="d-flex  align-items-center text-white">
            <button class="btn px-4 border-end border-start" type="submit">
              <FaSearch color="white"/>
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
