import React, { useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

// import mostPopularSVG from "../assets/most-popular.svg";
// import topRatedSVG from "../assets/top-rated.svg";
// import bestPracticeSVG from "../assets/best-practice.svg";
import image8 from "../assets/image (18).png";
import image9 from "../assets/image (19).png";
import image10 from "../assets/image (20).png";
import image11 from "../assets/image (21).png";
import image12 from "../assets/image (22).png";
import image13 from "../assets/image (23).png";
import image1 from "../assets/image (1).png";
import image3 from "../assets/image (2).png";

import image6 from "../assets/image (3).png";

import image20 from "../assets/image (4).png";

import image18 from "../assets/image (5).png";

import image19 from "../assets/image (6).png";

const RecommendedCourses = () => {
  const courses = [
    {
      id: 8,
      title: "THE POWER OF CONFLUENCE",
      description: "Learn this insider secret used by professional traders.",
      instructor: "Professor Adam Khoo ",
      image: image8,
      videoUrl: "https://youtu.be/adOETTJoj_k?si=7EKwYebt9Qaa061D",
    },
    {
      id: 9,
      title: "POWER CANDLE STICK PATTERNS",
      description:
        "Five Power Candlestick Patterns in Stock Trading Strategies by Adam Khoo.",
      instructor: "Professor Adam Khoo ",
      image: image9,
      videoUrl: "https://youtu.be/hoGkfzJeR6A?si=HulUkDkS2H-EfnAE",
    },
    {
      id: 10,
      title: "IDENTIFY SUPPORT & RESISTANCE",
      description:
        "Learn how to identify support and resistance levels in Forex Trading.",
      instructor: "Professor Adam Khoo ",
      image: image10,
      videoUrl: "https://youtu.be/C06JMxI6Tsg?si=qbWEtBI-RSL4tg8I",
    },
    {
      id: 11,
      title: "EXPERTS TIPS ON INVESTING",
      description:
        "Experts share investment tips on building sustainable wealth.",
      instructor: "The Yahoo Finance ",
      image: image11,
      videoUrl: "https://youtu.be/yH6DT7_rKgQ?si=wMdtkkdY1bS3oid-",
    },
    {
      id: 12,
      title: "HOW TO TALK ABOUT MONEY",
      description:
        "Learn How to talk about money to your family and investing.",
      instructor: "The Yahoo Finance ",
      image: image12,
      videoUrl: "https://youtu.be/OB6cEAk0SGI?si=qXu9qCm0sYLgEW6B",
    },
    {
      id: 13,
      title: "HOW TO START INVESTING?",
      description: "How to start investing & Long term strategy importance.",
      instructor: "The Yahoo Finance ",
      image: image13,
      videoUrl: "https://youtu.be/1SMGf87gak4?si=w2Mj3GjxrVvndzVm",
    },
    {
      id: 7,
      title: "BUDGETING FOR BEGINNERS",
      description: "How to make a budget from scratch-A complete guide.",
      instructor: "Debt Free Millennials",
      image: image1,
      videoUrl: "https://youtu.be/7lHNMGoACdQ?si=q66CLbbITDqCECi0",
    },

    {
      id: 8,
      title: "EASY BUDGET SPREADSHEET",
      description: "Explained how to make a easy budget spreadsheet for you.",
      instructor: "Debt Free Millennials",
      image: image3,
      videoUrl: "https://youtu.be/uo4WnQW6EvY?si=g_Cna7mHikakiw4P",
    },

    {
      id: 9,
      title: "COLLEGE STUDENT GUIDE TO MONEY!",
      description:
        "Will explain the money basics every college student needs to know.",
      instructor: "The Financial Diet ",
      image: image6,
      videoUrl: "https://youtu.be/PPVEkzW_xhc?si=FOeFbLi1raWxJJaJ",
    },

    {
      id: 10,
      title: "THE THREE MONEY PERSONALITIES",
      description: "This video helps you identify your money personality.",
      instructor: "The Financial Diet ",
      image: image20,
      videoUrl: "https://youtu.be/xbqrOmD35h4?si=6EUYnsnq3ihHZ320",
    },

    {
      id: 11,
      title: "BUY YOUR FIRST RENTAL PROPERTY",
      description:
        "Here is exactly how you can buy your first rental property, step by step.",
      instructor: "Graham Stephan",
      image: image18,
      videoUrl: "https://youtu.be/bJx7_1rWC6U?si=fvZZ9ku-hqIf_lR2",
    },

    {
      id: 12,
      title: "HOW TO RETIRE IN 10 YEARS",
      description:
        "Here we talk about how to retire in 10 year, starting with $0.",
      instructor: "Graham Stephan",
      image: image19,
      videoUrl: "https://youtu.be/-glfrfDLLTs?si=mCeaJFDQ_SH0NVly",
    },
  ];
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const gridLayout = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "30px",
    marginBottom: "20px",
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="container investment">
        <h1
          style={{ textAlign: "center", marginBottom: "20px" }}
          className="animate__animated animate__fadeInDown"
        >
          Our Recommended Courses
        </h1>
        <div
          className="course-grid animate__animated animate__fadeInUp"
          style={gridLayout}
        >
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="course-card"
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                transform:
                  hoveredCourse === course.id ? "scale(1.02)" : "scale(1)",
                transition: "transform 0.3s",
                position: "relative",
              }}
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              {/* {index < 4 && (
                <img
                  src={mostPopularSVG}
                  alt="Most Popular"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "120px",
                    height: "auto",
                    zIndex: 1,
                  }}
                />
              )}
              {index >= 4 && index < 8 && (
                <img
                  src={topRatedSVG}
                  alt="Top Rated"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "120px",
                    height: "auto",
                    zIndex: 1,
                  }}
                />
              )}
              {index >= 8 && (
                <img
                  src={bestPracticeSVG}
                  alt="Best Practice"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "120px",
                    height: "auto",
                    zIndex: 1,
                  }}
                />
              )} */}
              <img
                src={course.image}
                alt={course.title}
                style={{ width: "100%", height: "auto", marginBottom: "10px" }}
              />
              <h2
                style={{
                  fontSize: "1.2em",
                  marginBottom: "5px",
                  color: "#000000",
                }}
              >
                {course.title}
              </h2>
              <p style={{ marginBottom: "10px", color: "#777" }}>
                {course.description}
              </p>
              <p>
                <strong style={{ color: "#333" }}>Instructor:</strong>{" "}
                <span style={{ color: "#777" }}>{course.instructor}</span>
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Link
                  to={course.videoUrl}
                  target="_blank"
                  style={{ width: "100%" }}
                >
                  <button
                    style={{
                      backgroundColor: "#ffd700",
                      color: "#000000",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      width: "100%",
                      fontFamily: "Poppins",
                    }}
                  >
                    Watch Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedCourses;
