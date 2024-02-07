import { useContext, useState } from "react";
import { UserContext } from "../context/userContext"; // Import UserContext
import { useNavigate } from "react-router-dom";

function Home() {
  const { user, logout } = useContext(UserContext);
  const [courses, setCourses] = useState([
    {
      name: "ABC",
    },
  ]);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Call logout function from user context
    logout();
    navigate("/login");
  };

  return (
    <div>
      <div className="container d-flex justify-content-between">
        <h1>Welcome {user ? user.name : "Guest"}</h1>
        {user && (
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
      <div
        className=" d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
      <Link>Add+</Link>
        <div className="w-50 d-flex justify-content-center align-items-center">
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
                      <button className="btn btn-warning mx-2">Edit</button>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
