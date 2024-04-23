import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import main from "../assets/main_icon.png";
import hamburger from "../assets/hamburger.png";
import close from "../assets/close.png";
import axios from "axios";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    }
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:4000/logout")
      .then((res) => {
        if (res.data.status) {
          sessionStorage.removeItem("username");
          sessionStorage.removeItem("email");
          sessionStorage.removeItem("mobileNumber");
          setIsLoggedIn(false);
          navigate("/login");
          closeNavbar();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top bg-secondary-subtle">
        <div className="container-fluid">
          <Link className="navbar-brand ms-2" to="/">
            <img
              src={main}
              className="img-fluid"
              alt="investment-icon"
              style={{ height: "40px" }}
            />
          </Link>
          <div className="d-flex justify-content-center flex-grow-1">
            <Link
              className="navbar-brand"
              style={{
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "24px",
                letterSpacing: "0.5px",
              }}
              to="/"
            >
              Invest Wise
            </Link>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            style={{
              background: "none",
              padding: 5,
              outline: "none",
              border: "none",
            }}
          >
            <span
              className={`navbar-toggler-icon ${
                isOpen
                  ? "navbar-toggler-icon-cross"
                  : "navbar-toggler-icon-lines"
              }`}
              style={{
                backgroundImage: `url(${isOpen ? close : hamburger})`,
                width: "25px",
                height: "25px",
                display: "inline-block",
                backgroundSize: "cover",
              }}
            ></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <div className="row w-100">
              <div className="col-lg-8">
                <ul
                  className="navbar-nav ms-auto mb-2 mb-lg-0"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    fontSize: "16px",
                    letterSpacing: "0.5px",
                  }}
                >
                  <li className="nav-item ms-5">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                      to="/"
                      onClick={closeNavbar}
                    >
                      Home
                    </Link>
                  </li>
                  {isLoggedIn ? (
                    <>
                      <li className="nav-item ms-5 dropdown">
                        <span
                          className={`nav-link dropdown-toggle ${
                            location.pathname.includes("/goal_tracker") ||
                            location.pathname.includes(
                              "/transactions_manager"
                            ) ||
                            location.pathname.includes("/community_calculator")
                              ? "active"
                              : ""
                          }`}
                          id="navbarDropdownServices"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ cursor: "pointer" }}
                        >
                          Services
                        </span>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdownServices"
                        >
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/transactions_manager"
                              onClick={closeNavbar}
                            >
                              Transcations Manager
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/goal_tracker"
                              onClick={closeNavbar}
                            >
                              Goal Tracker
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/community_calculator"
                              onClick={closeNavbar}
                            >
                              SIP Calculator
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item ms-5 dropdown">
                        <span
                          className={`nav-link dropdown-toggle ${
                            location.pathname.includes("/finance_courses") ||
                            location.pathname.includes("/investment_courses") ||
                            location.pathname.includes("/recommended_courses")
                              ? "active"
                              : ""
                          }`}
                          id="navbarDropdownServices"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ cursor: "pointer" }}
                        >
                          Courses
                        </span>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdownServices"
                        >
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/recommended_courses"
                              onClick={closeNavbar}
                            >
                              Recommended Courses
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/finance_courses"
                              onClick={closeNavbar}
                            >
                              Finance Courses
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/investment_courses"
                              onClick={closeNavbar}
                            >
                              Investment Courses
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </>
                  ) : null}
                  <li className="nav-item ms-5">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/about" ? "active" : ""
                      }`}
                      to="/about"
                      onClick={closeNavbar}
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item ms-5">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/contact" ? "active" : ""
                      }`}
                      to="/contact"
                      onClick={closeNavbar}
                    >
                      Contact
                    </Link>
                  </li>
                  {username ? (
                    <div className="nav-item dropdown ms-5">
                      <span
                        className={`nav-link dropdown-toggle ${
                          location.pathname.includes("/create_profile") ||
                          location.pathname.includes("/user_details")
                            ? "active"
                            : ""
                        }`}
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ cursor: "pointer" }}
                      >
                        {username}
                      </span>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/create_profile"
                            onClick={closeNavbar}
                          >
                            Create Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/user_details"
                            onClick={closeNavbar}
                          >
                            My Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            style={{ cursor: "pointer" }}
                            onClick={handleLogout}
                          >
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <li className="nav-item">
                      <Link
                        className="nav-link btn btn-warning ms-5"
                        to="/login"
                        onClick={closeNavbar}
                      >
                        Login
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
