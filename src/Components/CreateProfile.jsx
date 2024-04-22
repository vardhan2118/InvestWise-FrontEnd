import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";


const CreateProfile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  }, []);

  const [profileData, setProfileData] = useState({
    photo: "",
    firstName: "",
    lastName: "",
    username: sessionStorage.getItem("username") || "",
    email: sessionStorage.getItem("email") || "",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "username") {
      sessionStorage.setItem("username", value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (profileData.mobileNumber === "undefined") {
        setProfileData((prevData) => ({
          ...prevData,
          mobileNumber: prevData.mobileNumber,
        }));
      }

      sessionStorage.setItem("mobileNumber", profileData.mobileNumber);

      await axios.post(
        "http://localhost:4000/profile",
        {
          ...profileData,
        },
        {
          withCredentials: true,
        }
      );
      alert("Profile created successfully");
      navigate("/user_details");
    } catch (error) {
      console.error("Error creating profile:", error);
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

  const [profileCreated, setProfileCreated] = useState(false);

  useEffect(() => {
    const mobileNumber = sessionStorage.getItem("mobileNumber");
    if (mobileNumber !== null && mobileNumber !== "undefined") {
      setProfileCreated(true);
    } else {
      setProfileCreated(false);
    }
  }, []);

  const handleViewProfile = () => {
    navigate("/user_details");
  };

  if (profileCreated) {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="text-center">
            <h1>You have already created a profile</h1>
            <button
              className="btn btn-warning mt-3 text-light special"
              onClick={handleViewProfile}
              style={{
                fontSize: "20px",
                fontWeight: "600",
                fontFamily: "Poppins",
                letterSpacing: "0.5px",
              }}
            >
              View Profile
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="container profile">
        <h1>Create Profile</h1>
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
                    className="selected-photo"
                  />
                ) : (
                  <span>Photo</span>
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
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">
              Please enter your first name.
            </div>
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
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please enter your last name.</div>
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
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Please choose a username.</div>
            </div>
          </div>

          {/* Email */}
          <div className="col-md-6">
            <label htmlFor="validationCustom06" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control custom-input"
              id="validationCustom06"
              name="email"
              value={profileData.email}
              required
              readOnly
            />
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
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">
              Please provide a valid mobile number.
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
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">
              Please provide a valid date of birth.
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
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">
              Please provide your annual income.
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
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">
              Please provide your occupation.
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
            <div className="valid-feedback">Looks good!</div>
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
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please select a valid state.</div>
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
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please provide a valid zip.</div>
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
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label " htmlFor="other">
                  Other
                </label>
              </div>
            </div>
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please select your gender.</div>
          </div>
          {/* Bio */}
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
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">
              Please add something about yourself.
            </div>
          </div>
          {/* Agree to terms and conditions */}
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input custom-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="form-check-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>

          {/* Submit button */}
          <div className="col-12 mb-4">
            <button
              className="btn btn-warning text-light"
              type="submit"
              style={{
                fontSize: "20px",
                fontWeight: "600",
                fontFamily: "Poppins",
                letterSpacing: "0.5px",
              }}
            >
              Create Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
