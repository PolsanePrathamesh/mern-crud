import { useContext } from "react";
import { useUserContext } from "../context/userContext";

function Home() {
  const { user, logout } = useContext(useUserContext);

  const handleLogout = () => {
    // Call logout function from user context
    logout();
  };

  return (
    <div>
      <h1>Welcome {user ? user.name : "Guest"}</h1>
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}

export default Home;
