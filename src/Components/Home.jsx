import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import homeImage1 from "../assets/home1.jpg";
import homeImage2 from "../assets/home2.jpg";
import homeImage3 from "../assets/home3.jpg";
import homeImage5 from "../assets/home5.jpg";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="container-fluid home">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-11 ">
            <div className="text-center mb-2">
              <h1 className="display-4 text-primary animate__animated animate__fadeInDown">
                Welcome to InvestWise
              </h1>
              <p className="lead text-secondary animate__animated animate__fadeInDown">
                Your Personal Finance and Investment Education Platform
              </p>
            </div>
            <div className="mb-5 animate__animated animate__fadeInUp">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={homeImage1}
                      className="d-block w-100"
                      alt="First slide"
                      style={{ maxHeight: "520px" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={homeImage2}
                      className="d-block w-100"
                      alt="Second slide"
                      style={{ maxHeight: "520px" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={homeImage3}
                      className="d-block w-100"
                      alt="Third slide"
                      style={{ maxHeight: "520px" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={homeImage3}
                      className="d-block w-100"
                      alt="Fourth slide"
                      style={{ maxHeight: "520px" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={homeImage5}
                      className="d-block w-100"
                      alt="Fifth slide"
                      style={{ maxHeight: "520px" }}
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="mb-4 animate__animated animate__fadeInUp">
              <p>
                InvestWise provides you with comprehensive resources and tools
                to empower your financial journey. Whether you're a beginner or
                an experienced investor, we've got you covered.
              </p>
              <p>
                Explore our articles, guides, videos, and courses to enhance
                your knowledge and make informed financial decisions.
              </p>
            </div>
            <div className="row">
              <div className="col-md-6 animate__animated animate__fadeInLeft">
                <div
                  className="card border-0 shadow-lg mb-4"
                  style={{ backgroundColor: "#F7D7D7" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">Financial Articles</h5>
                    <p className="card-text">
                      Discover insightful articles on various financial topics.
                      Expand your knowledge on investment strategies, market
                      trends, and more.
                    </p>
                    <Link
                      to="#"
                      className="btn btn-primary btn-lg btn-block"
                      style={{
                        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "#FF6B6B",
                        borderColor: "#FF6B6B",
                      }}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate__animated animate__fadeInRight">
                <div
                  className="card border-0 shadow-lg mb-4"
                  style={{ backgroundColor: "#D5ECC2" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">Investment Guides</h5>
                    <p className="card-text">
                      Explore step-by-step guides to kickstart your investments.
                      From setting financial goals to building a diversified
                      portfolio, we've got you covered.
                    </p>
                    <Link
                      to="#"
                      className="btn btn-primary btn-lg btn-block"
                      style={{
                        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "#6BD5FF",
                        borderColor: "#6BD5FF",
                      }}
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 animate__animated animate__fadeInLeft">
                <div
                  className="card border-0 shadow-lg mb-4"
                  style={{ backgroundColor: "#FED9B7" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">Video Tutorials</h5>
                    <p className="card-text">
                      Watch engaging video tutorials to deepen your
                      understanding of complex financial concepts. Learn at your
                      own pace with our comprehensive video library.
                    </p>
                    <Link
                      to="#"
                      className="btn btn-primary btn-lg btn-block"
                      style={{
                        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "#FFD76B",
                        borderColor: "#FFD76B",
                      }}
                    >
                      Watch Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate__animated animate__fadeInRight">
                <div
                  className="card border-0 shadow-lg mb-4"
                  style={{ backgroundColor: "#D6EAF8" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">Interactive Courses</h5>
                    <p className="card-text">
                      Enroll in interactive courses designed to take your
                      financial knowledge to the next level. Gain practical
                      skills and insights from industry experts.
                    </p>
                    <Link
                      to="#"
                      className="btn btn-primary btn-lg btn-block"
                      style={{
                        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "#A3B5FF",
                        borderColor: "#A3B5FF",
                      }}
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
