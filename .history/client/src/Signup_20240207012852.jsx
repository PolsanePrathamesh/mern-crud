import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-dark"
      style={{ height: "100vh" }}
    >
      <form>
        <h3 className="mb-4 text-white">Sign In</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control "
            placeholder="Enter name"
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control "
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control "
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
