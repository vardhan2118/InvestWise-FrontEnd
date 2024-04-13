import React, { useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/contact",
        formData,
        { withCredentials: true }
      );
      alert("Details sended successfully");
      console.log(response.data);

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="contact d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row ">
            <div className="col-md-12">
              <h1 className="text-center mb-4 animate__animated animate__fadeInDown">
                Our Contact Information
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 " style={{ paddingRight: "25px" }}>
              <p
                className="text-justify mb-4 animate__animated animate__fadeInLeft "
                style={{ lineHeight: "1.8" }}
              >
                Feel free to reach out to us with any questions or inquiries you
                may have regarding personal finance and investment education. We
                are here to assist you and typically respond within 24 hours.
                Explore the enriching knowledge and insights curated by our
                experts to empower your financial journey. Dive into our
                comprehensive resources, meticulously crafted to provide you
                with the latest insights and strategies for managing your
                finances and making informed investment decisions. Get in touch
                today to embark on a transformative learning experience in
                personal finance and investment education.Whether you're a
                beginner looking to learn the basics of budgeting and saving or
                an experienced investor seeking advanced investment strategies,
                our team is dedicated to providing you with the guidance and
                support you need to achieve your financial goals.
              </p>
            </div>
            <div className="col-md-6 animate__animated animate__fadeInRight">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control custom-input"
                    id="floatingName"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="floatingName">Name</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="email"
                    className="form-control custom-input"
                    id="floatingEmail"
                    placeholder="name@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="floatingEmail">Email </label>
                </div>
                <div className="form-floating mb-4">
                  <textarea
                    className="form-control custom-input"
                    placeholder="Leave your comments here"
                    id="floatingComments"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ height: "200px" }}
                  ></textarea>
                  <label htmlFor="floatingComments">Enter Queries</label>
                </div>
                <button
                  type="submit"
                  className="btn btn-warning w-100 text-light special"
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Poppins",
                    letterSpacing: "0.5px",
                  }}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center mt-5">
        <p className="animate__animated animate__fadeInUp">
          <strong>&copy; 2024 Invest Wise</strong>
        </p>
      </footer>
    </div>
  );
};

export default Contact;
