import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("")
    axios.get("/");
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
