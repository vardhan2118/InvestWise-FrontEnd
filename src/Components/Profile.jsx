import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    photo: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    mobileNumber: "",
    dateOfBirth: "",
    annualIncome: "",
    occupation: "",
    address: "",
    state: "",
    zip: "",
    gender: "",
    bio: "",
  });

  const email = sessionStorage.getItem("email");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/profile?email=${email}`
        );
        if (response.status === 200 && response.data) {
          setProfileData(response.data);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchData();
  }, [email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      try {
        await axios.put(
          `http://localhost:4000/profile?email=${email}`,
          profileData,
          {
            withCredentials: true,
          }
        );
        alert("Profile updated successfully");
        navigate("/user_details");
      } catch (error) {
        console.error("Error saving profile:", error);
      }
    } else {
      form.reportValidity();
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileData((prevData) => ({
        ...prevData,
        photo: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const indianStates = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="container profile">
        <h1>Update Profile</h1>
        <form
          className="row g-3 needs-validation"
          noValidate
          onSubmit={handleSubmit}
        >
          {/* Photo input */}
          <div className="col-md-6 offset-md-5">
            <label htmlFor="photoInput" className="custom-photo-input">
              <div className="photo-preview">
                {profileData.photo ? (
                  <img
                    src={profileData.photo}
                    alt="Selected"
                    className="selected-photo profile-omage"
                  />
                ) : (
                  <span>Select Photo</span>
                )}
              </div>
              <input
                type="file"
                id="photoInput"
                accept="image/*"
                name="photo"
                onChange={handlePhotoChange}
                style={{ display: "none" }}
              />
            </label>
          </div>
          {/* First Name */}
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control custom-input"
              id="validationCustom01"
              name="firstName"
              value={profileData.firstName}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Please provide a first name.</div>
          </div>
          {/* Last Name */}
          <div className="col-md-6">
            <label htmlFor="validationCustom02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control custom-input"
              id="validationCustom02"
              name="lastName"
              value={profileData.lastName}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Please provide a last name.</div>
          </div>
          {/* Username */}
          <div className="col-md-6">
            <label htmlFor="validationCustomUsername" className="form-label">
              Username
            </label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">
                @
              </span>
              <input
                type="text"
                className="form-control custom-input"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                name="username"
                value={profileData.username}
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">Please provide a username.</div>
            </div>
          </div>
          {/* Email */}
          <div className="col-md-6">
            <label htmlFor="validationCustom06" className="form-label">
              Email
              <span style={{ fontFamily: "Poppins", fontSize: "10px" }}>
                (Give email used in login)
              </span>
            </label>
            <input
              type="email"
              className="form-control custom-input"
              id="validationCustom06"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Please provide an email.</div>
          </div>
          {/* Mobile Number */}
          <div className="col-md-6">
            <label htmlFor="validationCustom07" className="form-label">
              Mobile Number
            </label>
            <input
              type="text"
              className="form-control custom-input"
              id="validationCustom07"
              name="mobileNumber"
              value={profileData.mobileNumber}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">
              Please provide a mobile number.
            </div>
          </div>
          {/* Date of Birth */}
          <div className="col-md-6">
            <label htmlFor="validationCustom09" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              className="form-control custom-input"
              id="validationCustom09"
              name="dateOfBirth"
              value={profileData.dateOfBirth}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">
              Please provide a date of birth.
            </div>
          </div>
          {/* Annual Income */}
          <div className="col-md-3">
            <label htmlFor="validationCustom10" className="form-label">
              Annual Income
            </label>
            <input
              type="number"
              className="form-control custom-input"
              id="validationCustom10"
              name="annualIncome"
              value={profileData.annualIncome}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">
              Please provide an annual income.
            </div>
          </div>
          {/* Occupation */}
          <div className="col-md-3">
            <label htmlFor="validationCustom11" className="form-label">
              Occupation
            </label>
            <input
              type="text"
              className="form-control custom-input"
              id="validationCustom11"
              name="occupation"
              value={profileData.occupation}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">
              Please provide an occupation.
            </div>
          </div>
          {/* Address */}
          <div className="col-md-6">
            <label htmlFor="validationCustom08" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control custom-input"
              id="validationCustom08"
              name="address"
              value={profileData.address}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Please provide an address.</div>
          </div>
          {/* State */}
          <div className="col-md-3">
            <label htmlFor="validationCustom04" className="form-label">
              State
            </label>
            <select
              className="form-select custom-input"
              id="validationCustom04"
              name="state"
              value={profileData.state}
              onChange={handleChange}
              required
            >
              <option disabled value="">
                Choose state
              </option>
              {indianStates.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">Please select a state.</div>
          </div>
          {/* Zip */}
          <div className="col-md-3">
            <label htmlFor="validationCustom05" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control custom-input"
              id="validationCustom05"
              name="zip"
              value={profileData.zip}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Please provide a zip code.</div>
          </div>
          {/* Gender */}
          <div className="col-md-6">
            <label className="form-label">Gender</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input custom-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={profileData.gender === "male"}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline ">
                <input
                  className="form-check-input custom-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={profileData.gender === "female"}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input custom-input"
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                  checked={profileData.gender === "other"}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label " htmlFor="other">
                  Other
                </label>
              </div>
            </div>
            <div className="invalid-feedback">Please select a gender.</div>
          </div>

          <div className="col-12">
            <label htmlFor="bio" className="form-label">
              Bio
            </label>
            <textarea
              className="form-control custom-input"
              id="bio"
              name="bio"
              value={profileData.bio}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
            <div className="invalid-feedback">Please provide a bio.</div>
          </div>
          {/* Submit button */}
          <div className="col-6">
            <button
              className="btn btn-warning text-light"
              type="submit"
              style={{
                fontSize: "20px",
                fontWeight: "600",
                fontFamily: "Poppins",
                letterSpacing: "1px",
                marginTop: "10px",
                marginBottom: "30px",
                marginLeft: "10px",
                width: "50%",
              }}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
