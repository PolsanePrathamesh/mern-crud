import { useContext } from "react";
import { UserContext } from "../context/userContext"; // Import UserContext
import { useNavigate } from "react-router-dom";

function Home() {
  const { user, logout } = useContext(UserContext);
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
    <div>
      <div className="w-50 justify-content-center align-items-center">
      <table>
        
      </table>

      </div>
    </div>
    </div>
  );
}

export default Home;
