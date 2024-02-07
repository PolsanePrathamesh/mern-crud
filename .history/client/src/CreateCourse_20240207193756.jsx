import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { UserContext } from "../context/userContext";

function CreateCourse() {
  const { setUser } = useContext(UserContext);

  const [formDetails, setFormDetails] = useState({
    name: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name } = formDetails;

    const res = await axios.post("/login", {
      name,
    });
    console.log(res.data);
    if (res.data.error) {
      setError(res.data.error);
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
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
      <form className="bg-light">
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
