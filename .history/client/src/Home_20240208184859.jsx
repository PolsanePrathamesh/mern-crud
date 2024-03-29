import React from "react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext"; // Import UserContext
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const { user, logout } = useContext(UserContext);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    let res = await axios.get("/course");
    setCourses(res.data);
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    // Call logout function from user context
    logout();
    navigate("/login");
  };

  const handleDelete = async (id) => {
    let res = await axios.delete("/course/" + id);
    console.log(res);
    if (res.status === 200) {
      getCourses();
    }
  };

  return (
    <div>
      <div className="container d-flex justify-content-between">
        <h1>Welcome </h1>
        {user && (
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
      <div
        className=" d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Link to="/create-course" className="btn btn-success align-self-center">
          Add+
        </Link>
        <div className="w-50 d-flex justify-content-center align-items-center">
          {courses.length > 0 ? (
            <table className="table">
              <thead>
                <tr className="" style={{ fontWeight: "bold" }}>
                  <td className="text-center">Name</td>
                  <td className="text-center">Action</td>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center">{course.name}</td>
                      <td className="text-center">
                        <Link
                          to={`/update-course/${course._id}`}
                          className="btn btn-warning mx-2"
                        >
                          Edit
                        </Link>{" "}
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(course._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <h2>No courses Added</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
