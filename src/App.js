import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "animate.css/animate.min.css";
import Login from "./Components/UserComponents/Login.jsx";
import Signup from "./Components/UserComponents/Signup.jsx";
import ForgotPassword from "./Components/UserComponents/ForgotPassword.jsx";
import ResetPassword from "./Components/UserComponents/ResetPassword.jsx";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar.jsx";
import Contact from "./Components/Contact.jsx";
import Profile from "./Components/Profile.jsx";
import About from "./Components/About.jsx";
import UserDetails from "./Components/UserDetails.jsx";
import CreateProfile from "./Components/CreateProfile.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/reset_password/:token" element={<ResetPassword />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/user_details" element={<UserDetails />} />
        <Route path="/create_profile" element={<CreateProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;