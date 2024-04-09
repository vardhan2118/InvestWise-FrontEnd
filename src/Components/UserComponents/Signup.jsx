import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { MdOutlineMailOutline, MdLockOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  const clearErrorMsg = () => {
    setErrorMsg("");
  };

  const togglePassword = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/signup", { username, email, password })
      .then((response) => {
        if (response.data.status) {
          navigate("/login");
        }
      })
      .catch((err) => {
        setErrorMsg("Email Already Registered");
        console.log(err);
      });
  };

  return (
    <div className=" d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-4 ">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <h1 className="text-center mb-3">Sign Up</h1>
              <div className="form-group">
                <label htmlFor="username">Name</label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <FaRegUser />
                  </span>
                  <input
                    type="text"
                    id="username"
                    className="form-control custom-input"
                    placeholder="Name"
                    required
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
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
                <label htmlFor="password">Password</label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <MdLockOutline />
                  </span>
                  <input
                    type={showPass ? "text" : "password"}
                    id="password"
                    className="form-control custom-input"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={clearErrorMsg}
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "300",
                      fontSize: "12px",
                    }}
                  />
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input custom-input"
                      id="showPassword"
                      onChange={togglePassword}
                    />
                    <label className="form-check-label" htmlFor="showPassword">
                      Show Password
                    </label>
                  </div>
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
                  Sign Up
                </button>
              </div>
              <p className="text-center mb-2 mt-2">
                Already Registered?{" "}
                <Link
                  to="/login"
                  className="link text-warning"
                  style={{
                    fontWeight: "400",
                    fontFamily: "Poppins",
                    textDecoration: "none",
                    letterSpacing: "0.3px",
                  }}
                >
                  Log In
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

export default Signup;
