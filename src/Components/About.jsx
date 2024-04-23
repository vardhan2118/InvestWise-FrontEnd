import React from "react";
import NavBar from "./NavBar";
import person1 from "../assets/vardhan.jpg";
import person2 from "../assets/yaseen.jpg";
import person3 from "../assets/lokesh.jpg";
import person4 from "../assets/hussain.jpg";
import person5 from "../assets/raghu.jpg";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import about from "../assets/about.jpg";

const About = () => {
  const members = [
    {
      id: 1,
      name: "Chitravardhan Reddy",
      email: "cchitravardhan21@gmail.com",
      phoneNumber: "+91 9391714251",
      address: "2-571,Balaji Nagar,Proddatur",
      image: person1,
    },
    {
      id: 2,
      name: "Yaseen Khan",
      email: "2003yaseenkhan@gmail.com",
      phoneNumber: "+91 9391147338 ",
      address: "19/280, Balobigari street,Proddatur",
      image: person2,
    },
    {
      id: 3,
      name: "Rama Lokesh Reddy",
      email: "grlr2003@gmail.com ",
      phoneNumber: "+91 9440492005",
      address: "Flat no 311,Balaji Apartments,Badvel",
      image: person3,
    },
    {
      id: 4,
      name: "Mahaboob Hussain",
      email: "kmahaboobhussain1234@gmail.com",
      phoneNumber: "+91 8309233384 ",
      address: "11/498,Mokshagundam Street,Proddatur",
      image: person4,
    },
    {
      id: 5,
      name: "Raghu Rami Reddy",
      email: "raghureddy2432@gmail.com",
      phoneNumber: "+91 900866225",
      address: "Electronic city,phase2,Banglore",
      image: person5,
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="container mt-5 about">
        <div className="row">
          <div className="col-lg-6 animate__animated animate__fadeInLeft">
            <h1 className="mb-4">About InvestWise</h1>
            <p>
              InvestWise is a comprehensive Personal Finance and Investment
              Education Platform that empowers individuals to make informed
              financial decisions and achieve their financial goals.Our platform
              provides accessible and easy-to-understand educational content,
              ranging from beginner basics to advanced strategies, ensuring that
              individuals of all levels can benefit from our resources.
            </p>
          </div>
          <div className="col-lg-6 animate__animated animate__fadeInRight">
            <img
              src={about}
              alt="InvestWise"
              className="project-image img-fluid"
            />
          </div>
        </div>
        <div className="row mt-2 justify-content-center animate__animated animate__fadeInUp">
          <h1 className="text-center mb-3">Our Team</h1>
          {members.map((member) => (
            <div
              key={member.id}
              className="col-lg-2 col-md-4 mb-4 position-relative custom-card "
            >
              <div className="card card-custom h-100  ">
                <img
                  className="card-img-top"
                  src={member.image}
                  alt={member.name}
                />
                <div className="card-body custom-card">
                  <h6 className="card-title" style={{ fontSize: "76%" }}>
                    {member.name}
                  </h6>
                  <div className="member-details">
                    <div
                      className="details-content"
                      style={{ fontSize: "53%" }}
                    >
                      <p>
                        <FaEnvelope /> Email: {member.email}
                      </p>
                      <p>
                        <FaPhone /> Phone: {member.phoneNumber}
                      </p>
                      <p>
                        <FaLocationDot /> Address: {member.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
