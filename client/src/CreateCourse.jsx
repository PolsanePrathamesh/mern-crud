import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function CreateCourse() {
  const [formDetails, setFormDetails] = useState({
    name: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name } = formDetails;

    const res = await axios.post("/course/create", {
      name,
    });
    if (res.data.error) {
      setError(res.data.error);
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      setFormDetails({
        name: "",
      });
      navigate("/");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-dark"
      style={{ height: "100vh" }}
    >
      <form className="bg-light p-5 rounded-2">
        <h3 className="mb-4">Create Course</h3>
        <p className="text-danger text-center">{error}</p>
        <div className="mb-3">
          <label htmlFor="email" className="">
            Course Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Enter name"
            value={formDetails.name}
            onChange={handleChange}
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
      </form>
    </div>
  );
}

export default CreateCourse;
