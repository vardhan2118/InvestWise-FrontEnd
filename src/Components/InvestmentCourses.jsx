import React, { useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

import image1 from "../assets/investment1.jpg";
import image2 from "../assets/investment2.jpg";
import image3 from "../assets/investment3.jpg";
import image4 from "../assets/investment4.jpg";
import image5 from "../assets/investment5.jpg";
import image6 from "../assets/investment6.jpg";
import image7 from "../assets/investment7.jpg";
import image8 from "../assets/investment8.jpg";
import image9 from "../assets/investment9.jpg";
import image10 from "../assets/investment10.jpg";
import image11 from "../assets/investment11.jpg";
import image12 from "../assets/investment12.jpg";
import image13 from "../assets/investment13.jpg";
import image14 from "../assets/investment14.jpg";
import image15 from "../assets/investment15.jpg";
import image16 from "../assets/investment16.jpg";
import image17 from "../assets/investment17.jpg";
import image18 from "../assets/investment18.jpg";
import image19 from "../assets/investment19.jpg";
import image20 from "../assets/investment20.jpg";

const courses = [
  {
    id: 1,
    title: "THE PSYCHOLOGY OF MONEY",
    description:
      "This is summary of The Psychology of Money, by Morgan Housel.",
    instructor: "Erik Abrahamsson",
    image: image1,
    videoUrl: "https://youtu.be/TJDcGv9OH4Q?si=nDgJubsgTca9g1l4",
  },
  {
    id: 2,
    title: "THE INTELLIGENT INVESTOR",
    description:
      "This video presents the 5 greatest takeaways of The Intelligent Investor.",
    instructor: "Erik Abrahamsson",
    image: image2,
    videoUrl: "https://youtu.be/npoyc_X5zO8?si=vrjQFg26nTYtorJV",
  },
  {
    id: 3,
    title: " BOOK THAT BEATS THE MARKET",
    description: "Video on Summary of book: The Little Book That Beats the Market.",
    instructor: "Erik Abrahamsson",
    image: image3,
    videoUrl: "https://youtu.be/fzig7KJFuNU?si=Afb032w0JCSCus9n",
  },
  {
    id: 4,
    title: "COMMON STOCKS & PROFITS",
    description:
      "This is a video summary of Common Stocks and Uncommon Profits.",
    instructor: "Erik Abrahamsson",
    image: image4,
    videoUrl: "https://youtu.be/hyG6moy4LBA?si=fAN0IrN4bm_zvdJh",
  },
  {
    id: 5,
    title: "STOCK MARKET GENIUS",
    description: "Video summary of book: You Can be a Stock Market Genius.",
    instructor: "Erik Abrahamsson",
    image: image5,
    videoUrl: "https://youtu.be/ZaR3yotbH6U?si=2UT4NtD_CdjAfwdx",
  },
  {
    id: 6,
    title: "TRADING LIKE A CASINO FOR CONSISTENT PROFITS",
    description:
      "These are essential stock trading strategies for stock traders and investors.",
    instructor: "Prof Adam Khoo ",
    image: image6,
    videoUrl: "https://youtu.be/bRCtBRsLPmk?si=VmTX-ph_teq7J4jC",
  },
  {
    id: 7,
    title: "TRADING WITH FIBONACCI LEVELS",
    description: "Learn how to incorporate the power of Fibonacci Levels .",
    instructor: "Prof Adam Khoo",
    image: image7,
    videoUrl: "https://youtu.be/mVNOU9O5vkE?si=96jmHmodWSyzXZP6",
  },
  {
    id: 8,
    title: "THE POWER OF CONFLUENCE",
    description: "Learn this insider secret used by professional traders.",
    instructor: "Prof Adam Khoo ",
    image: image8,
    videoUrl: "https://youtu.be/adOETTJoj_k?si=7EKwYebt9Qaa061D",
  },
  {
    id: 9,
    title: "POWER CANDLE STICK PATTERNS",
    description:
      "Five Power Candlestick Patterns in Stock Trading Strategies by Adam Khoo.",
    instructor: "Prof Adam Khoo ",
    image: image9,
    videoUrl: "https://youtu.be/hoGkfzJeR6A?si=HulUkDkS2H-EfnAE",
  },
  {
    id: 10,
    title: "IDENTIFY SUPPORT & RESISTANCE",
    description:
      "Learn how to identify support and resistance levels in Forex Trading.",
    instructor: "Prof Adam Khoo ",
    image: image10,
    videoUrl: "https://youtu.be/C06JMxI6Tsg?si=qbWEtBI-RSL4tg8I",
  },
  {
    id: 11,
    title: "EPERTS TIPS ON INVESTING",
    description:
      "Experts share investment tips on building sustainable wealth.",
    instructor: "Yahoo Finance ",
    image: image11,
    videoUrl: "https://youtu.be/yH6DT7_rKgQ?si=wMdtkkdY1bS3oid-",
  },
  {
    id: 12,
    title: "HOW TO TALK ABOUT MONEY",
    description: "Learn How to talk about money to your family and investing.",
    instructor: "Yahoo Finance ",
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
    id: 14,
    title: "STOCK SPLITS: Everything you need to know",
    description:
      "This video tells everything about stock splits and their types.",
    instructor: "The Yahoo Finance ",
    image: image14,
    videoUrl: "https://youtu.be/CK0sBbvbnA8?si=e1iAC2ju1WQCzoLV",
  },
  {
    id: 15,
    title: "INVESTMENT TRAPS TO AVOID",
    description:
      "How to avoid costly investing traps and pitfalls and be a safe investor.",
    instructor: "The Yahoo Finance ",
    image: image15,
    videoUrl: "https://youtu.be/WrpEeyNoFpU?si=HdYsmlcuvP3JSZgM",
  },
  {
    id: 16,
    title: "INVESTING IN STOCKS IN 2024",
    description:
      "Discusses about investing in stocks and guides beginners into it.",
    instructor: "Mr.Joseph Carlson",
    image: image16,
    videoUrl: "https://youtu.be/6pOAiSw3-Dc?si=MyIkz8MjqBmqGLF5",
  },
  {
    id: 17,
    title: "BEST STOCKS IN THE MARKET",
    description: "Discusses about best stocks in the market at present.",
    instructor: "Mr.Joseph Carlson",
    image: image17,
    videoUrl: "https://youtu.be/TEphC2SHIb0?si=6vo0bG_SAzJjjuNW",
  },
  {
    id: 18,
    title: "INVESTING IN REAL ESTATE",
    description:
      "Discusses about Investing In Real Estate For Big Dividends and profits.",
    instructor: "Mr.Joseph Carlson",
    image: image18,
    videoUrl: "https://youtu.be/pdNZKmhQG2I?si=Sp-nxTlEIALl0AV-",
  },
  {
    id: 19,
    title: "HIGH QUALITY DIVIDEND STOCKS",
    description:
      "Discusses and analyzes the high quality dividend stocks in market.",
    instructor: "Mr.Joseph Carlson",
    image: image19,
    videoUrl: "https://youtu.be/9BQXnYpvUHg?si=CrcI4re-gKE-_62r",
  },
  {
    id: 20,
    title: "BEST REAL ESTATE (REIT)  DIVIDEND COMPANIES!",
    description:
      "In this video we take a look at each real estate holding and analyze it.",
    instructor: "Mr.Joseph Carlson",
    image: image20,
    videoUrl: "https://youtu.be/m3ks6Ujmk1Y?si=kbk2ekKxEMTPWNPx",
  },
];

const InvestmentCourses = () => {
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
          Explore Our Investment Courses
        </h1>
        <div
          className="course-grid animate__animated animate__fadeInUp"
          style={gridLayout}
        >
          {courses.map((course) => (
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
              }}
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
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

export default InvestmentCourses;
