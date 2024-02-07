import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 

function Signup() {
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-dark"
      style={{ height: "100vh" }}
    >
      <form>
        <h3 className="mb-4 text-white">Sign In</h3>
        <div className="mb-3">
          <label className="text-white">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
          />
        </div>
        <div className="mb-3">
          <label className="text-white">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label className="text-white">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="#"> Forgot password?</a>
        </p>
        <div>
          <p className="text-white">Already have account?</p>
          <button className="btn btn-success">LOG IN</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;