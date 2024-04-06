import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const UserDetails = () => {
  const [userData, setUserData] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const email = sessionStorage.getItem("email");
        const response = await axios.get(
          `http://localhost:4000/profile?email=${email}`,
          {
            withCredentials: true,
          }
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }

  const handleLogout = () => {
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:4000/logout")
      .then((res) => {
        if (res.data.status) {
          sessionStorage.removeItem("username");
          sessionStorage.removeItem("email");
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteAccount = () => {
    setDeleteLoading(true);
    const email = sessionStorage.getItem("email");
    axios
      .delete("http://localhost:4000/delete_account", { data: { email } })
      .then((res) => {
        if (res.data.status) {
          sessionStorage.removeItem("username");
          sessionStorage.removeItem("email");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Error deleting account:", error);
      })
      .finally(() => {
        setDeleteLoading(false);
      });
  };

  const capitalizedGender =
    userData.gender.charAt(0).toUpperCase() + userData.gender.slice(1);

  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className="container mt-5 user-details">
        <h1 className="mb-4">My Profile</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-2">
              <div className="card-body text-center p-4">
                <img
                  src={userData.photo}
                  alt="User"
                  className="img-fluid rounded-circle  mb-3"
                  style={{ width: "197px", height: "197px" }}
                />
                <h5 className="card-title">{userData.username}</h5>
                <p className="text-muted mb-0">{userData.occupation}</p>
              </div>
            </div>
            <div className="card mb-2">
              <div className="card-body d-flex justify-content-between align-items-center">
                <button
                  onClick={handleDeleteAccount}
                  className="btn btn-danger ml-2"
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Poppins",
                    letterSpacing: "1px",
                    marginTop: "8px",
                    marginBottom: "10px",
                    marginLeft: "5px",
                    width: "100%",
                    cursor: "pointer",
                  }}
                  disabled={deleteLoading}
                >
                  {deleteLoading ? "Deleting..." : "Delete Account"}
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card flex-fill mb-4">
              <div className="card-body">
                <h5 className="card-title">Personal Information</h5>
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Name:</strong> {userData.firstName}{" "}
                    {userData.lastName}
                  </li>
                  <li className="list-group-item">
                    <strong>Email:</strong> {userData.email}
                  </li>
                  <li className="list-group-item">
                    <strong>Mobile:</strong> {userData.mobileNumber}
                  </li>
                  <li className="list-group-item">
                    <strong>Date of Birth:</strong> {userData.dateOfBirth}
                  </li>
                  <li className="list-group-item">
                    <strong>Address:</strong> {userData.address},{" "}
                    {userData.state}, {userData.zip}
                  </li>
                  <li className="list-group-item">
                    <strong>Gender:</strong> {capitalizedGender}
                  </li>
                  <li className="list-group-item">
                    <strong>Annual Income:</strong> {userData.annualIncome}
                  </li>
                </ul>
                <div className="mt-2 d-flex justify-content-between">
                  <Link
                    to="/profile"
                    className="btn btn-primary"
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      fontFamily: "Poppins",
                      letterSpacing: "1px",
                      marginTop: "10px",
                      marginBottom: "10px",
                      width: "48%",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-secondary"
                    onClick={handleLogout}
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      fontFamily: "Poppins",
                      letterSpacing: "1px",
                      marginTop: "10px",
                      marginBottom: "10px",
                      width: "48%",
                      cursor: "pointer",
                    }}
                  >
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <h5 className="mb-2">About Me</h5>
            <p className="text-muted">{userData.bio || "No bio available."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
