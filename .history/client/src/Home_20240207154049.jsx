import { useContext } from "react";
import { UserContext } from "../context/userContext"; // Import UserContext

function Home() {
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    // Call logout function from user context
    logout();
  };

  return (
    <div>
      <h1>Welcome {user ? user.name : "Guest"}</h1>
      {user && <button className="" onClick={handleLogout}>Logout</button>}
    </div>
  );
}

export default Home;
