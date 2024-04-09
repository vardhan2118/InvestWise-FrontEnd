import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { MdOutlineMailOutline } from "react-icons/md";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const clearErrorMsg = () => {
    setErrorMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/forgot_password", { email })
      .then((res) => {
        if (res.data.status) {
          alert("Reset Password link sent Succesfully to " + email);
          navigate("/login");
        } else {
          setErrorMsg("Please Enter Registered Email");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <h1 className="text-center mb-3">Forgot Password</h1>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <MdOutlineMailOutline />
                  </span>
                  <input
                    type="email"
                    id="email"
                    className="form-control custom-input"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={clearErrorMsg}
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "300",
                      fontSize: "12px",
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-warning btn-block mt-3 w-100 text-light"
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Poppins",
                    letterSpacing: "0.5px",
                  }}
                >
                  Send
                </button>
              </div>
              <p className="text-center mb-2 mt-2">
                New User?{" "}
                <Link
                  to="/signup"
                  className="link text-warning"
                  style={{
                    fontWeight: "400",
                    fontFamily: "Poppins",
                    textDecoration: "none",
                    letterSpacing: "0.3px",
                  }}
                >
                  Signup
                </Link>
              </p>
              {errorMsg && (
                <div
                  className="alert alert-danger text-center"
                  role="alert"
                  style={{ height: "30px", lineHeight: "0px" }}
                >
                  {errorMsg}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
