import React, { useState } from "react";
import { Link } from "react-router-dom";

import image1 from "../assets/finance1.jpg";
import image2 from "../assets/finance2.jpg";
import image3 from "../assets/finance3.jpg";
import image4 from "../assets/finance4.jpg";
import image5 from "../assets/finance5.jpg";
import image6 from "../assets/finance6.jpg";
import image7 from "../assets/finance7.jpg";
import image8 from "../assets/finance8.jpg";
import image9 from "../assets/finance9.jpg";
import image10 from "../assets/finance10.jpg";
import image11 from "../assets/finance11.jpg";
import image12 from "../assets/finance12.jpg";
import image13 from "../assets/finance13.jpg";
import image14 from "../assets/finance14.jpg";
import image15 from "../assets/finance15.jpg";
import image16 from "../assets/finance16.jpg";
import image17 from "../assets/finance17.jpg";
import image18 from "../assets/finance18.jpg";
import image19 from "../assets/finance19.jpg";
import image20 from "../assets/finance20.jpg";
import NavBar from "./NavBar";

const FinanceCourses = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const gridLayout = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "30px",
    marginBottom: "20px",
  };

  const courses = [
    {
      id: 1,
      title: "Budgeting for Beginners",
      description: "How to make a budget from scratch-A complete guide.",
      instructor: "Debt Free Millennials",
      image: image1,
      videoUrl: "https://youtu.be/7lHNMGoACdQ?si=q66CLbbITDqCECi0",
    },
    {
      id: 2,
      title: "Health Savings Account",
      description:
        "Explained about health savings account(HSA) and its benefits.",
      instructor: "Debt Free Millennials",
      image: image2,
      videoUrl: "https://youtu.be/sii1kX7awFQ?si=UnXo40-H59WzTAyj",
    },
    {
      id: 3,
      title: "Easy Budget Spreadsheet",
      description: "Explained how to make a easy budget spreadsheet for you.",
      instructor: "Debt Free Millennials",
      image: image3,
      videoUrl: "https://youtu.be/uo4WnQW6EvY?si=g_Cna7mHikakiw4P",
    },
    {
      id: 4,
      title: "Emergency Fund & Uses",
      description:
        "Exactly how much money you should have in your emergency fund!",
      instructor: "Debt Free Millennials",
      image: image4,
      videoUrl: "https://youtu.be/xTXc1P8pxac?si=doxgcZkFjVEzLQP4",
    },
    {
      id: 5,
      title: "Monthly Budgeting Tutorial",
      description:
        "How to set up your budget each month- Step by step tutorial.",
      instructor: "Debt Free Millennials",
      image: image5,
      videoUrl: "https://youtu.be/qRNrXnSrLWc?si=iXzdwdgcha5BOuji",
    },
    {
      id: 6,
      title: "College Student Guide To Money!",
      description:
        "Will explain the money basics every college student needs to know.",
      instructor: "The Financial Diet ",
      image: image6,
      videoUrl: "https://youtu.be/PPVEkzW_xhc?si=FOeFbLi1raWxJJaJ",
    },
    {
      id: 7,
      title: "Make Your Big Money Decisions",
      description:
        "Explains the toughest money decisions new college grads are facing.",
      instructor: "The Financial Diet ",
      image: image7,
      videoUrl: "https://youtu.be/OJL4JbtpD4Y?si=_7IhDVyLxLnVj5oI",
    },
    {
      id: 8,
      title: "How To Not Waste Money?",
      description:
        "Tells about how you are probably wasting money without even knowing it!",
      instructor: "The Financial Diet ",
      image: image8,
      videoUrl: "https://youtu.be/Cilowa0I7DQ?si=ObOaHOj2Dyk3EKbj",
    },
    {
      id: 9,
      title: "The 3 Most Money Personalities",
      description: "This video helps you identify your money personality.",
      instructor: "The Financial Diet ",
      image: image9,
      videoUrl: "https://youtu.be/xbqrOmD35h4?si=6EUYnsnq3ihHZ320",
    },
    {
      id: 10,
      title: "2 Controversial Money Moves",
      description: "In this video we examine some controversial money moves.",
      instructor: "The Financial Diet ",
      image: image10,
      videoUrl: "https://youtu.be/X96XaQ1y0g0?si=X95qoA8BMqolOjVN",
    },
    {
      id: 11,
      title: "Buy Your First Rental Property",
      description:
        "Here is exactly how you can buy your first rental property, step by step.",
      instructor: "Graham Stephan",
      image: image11,
      videoUrl: "https://youtu.be/bJx7_1rWC6U?si=fvZZ9ku-hqIf_lR2",
    },
    {
      id: 12,
      title: "Investing Advice For Teenagers",
      description:
        "For anyone who wanted a video about how to invest as a teenager.",
      instructor: "Graham Stephan",
      image: image12,
      videoUrl: "https://youtu.be/EKIhc3tS0os?si=X_-VaGpql66AjZrC",
    },
    {
      id: 13,
      title: "How To Retire In 10 Years (Starting With $0)",
      description:
        "Here we talk about how to retire in 10 year, starting with $0.",
      instructor: "Graham Stephan",
      image: image13,
      videoUrl: "https://youtu.be/-glfrfDLLTs?si=mCeaJFDQ_SH0NVly",
    },
    {
      id: 14,
      title: "How To Manage Your Money",
      description: "Here is how you can manage your money like the 1%.",
      instructor: "Graham Stephan",
      image: image14,
      videoUrl: "https://youtu.be/0O8yr3WheuE?si=e5LPtQxvdY3BNHbH",
    },
    {
      id: 15,
      title: "The Top 5 BEST Credit Cards",
      description:
        "Top 5 Best Credit Cards For Beginners,which will help build your credit score.",
      instructor: "Graham Stephan",
      image: image15,
      videoUrl: "https://youtu.be/1LzGIafwgTc?si=j7AAkTugHHDLI5g3",
    },
    {
      id: 16,
      title: "What is Mutual funds | Beginner",
      description: "Discusses about mutual funds and guides beginners into it.",
      instructor: "Prof Pranjal Kamra",
      image: image16,
      videoUrl: "https://youtu.be/rsFBpGUAZWA?si=uHJhmGus6-ZOLT10",
    },
    {
      id: 17,
      title: "Smart Steps to increase your wealth",
      description:
        "Discusses about smart steps that increases your wealth by 40%",
      instructor: "Prof Pranjal Kamra",
      image: image17,
      videoUrl: "https://youtu.be/fIJ86j0HIxM?si=01FXrGxcGkBiKkNr",
    },
    {
      id: 18,
      title: "Unknown Credit Card Secrets",
      description:
        "Credit Card Secrets - 5 Things to know before using a credit card.",
      instructor: "Prof Pranjal Kamra",
      image: image18,
      videoUrl: "https://youtu.be/dPBDfUwp2iU?si=WlfwdGJM83eMhXSs",
    },
    {
      id: 19,
      title: "What are Liquid called funds?",
      description:
        "We discuss what are liquid funds, how much return they provide?",
      instructor: "Prof Pranjal Kamra",
      image: image19,
      videoUrl: "https://youtu.be/jW-MDfsvL7o?si=F_tM63OtKTwtmrIA",
    },
    {
      id: 20,
      title: "Quick Financial Plan For Your Salary",
      description:
        "Investment strategies that are specifically designed for salaried individuals.",
      instructor: "Prof Pranjal Kamra",
      image: image20,
      videoUrl: "https://youtu.be/i8VrsYzjJCA?si=lWIyELDo0q5PLhDE",
    },
  ];

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="container finance">
        <h1
          className="animate__animated animate__fadeInDown"
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          Explore Our Finance Courses
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

export default FinanceCourses;
