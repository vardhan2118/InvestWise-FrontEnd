import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { MdLockOutline } from "react-icons/md";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const { token } = useParams();

  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPass(!showPass);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/reset_password/" + token, {
        password,
      })
      .then((res) => {
        if (res.data.status) {
          navigate("/login");
        }
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-4 animate__animated animate__pulse">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <h1 className="text-center mb-3">Reset Password</h1>
              <div className="form-group">
                <label htmlFor="password">Reset Password</label>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <MdLockOutline />
                  </span>
                  <input
                    type={showPass ? "text" : "password"}
                    id="password"
                    className="form-control custom-input"
                    placeholder="New Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
