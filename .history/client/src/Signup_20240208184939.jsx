import React from "react";
import { useContext, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/userContext";

function Signup() {
  const { setUser } = useContext(UserContext);

  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formDetails;

    const res = await axios.post("/register", {
      name,
      email,
      password,
    });

    if (res.data.error) {
      setError(res.data.error);
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      setUser(res.data);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("user", JSON.stringify(res.data));

      navigate("/");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-dark"
      style={{ height: "100vh" }}
    >
      <form>
        <h3 className="mb-4 text-white">Sign Up</h3>
        <p className="text-danger text-center">{error}</p>
        <div className="mb-3">
          <label className="text-white">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            name="name"
            value={formDetails.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="text-white">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={formDetails.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="text-white">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            value={formDetails.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="#"> Forgot password?</a>
        </p>
        <div>
          <p className="text-white">Already have an account?</p>
          <Link to="/login" className="btn btn-success">
            LOG IN
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
