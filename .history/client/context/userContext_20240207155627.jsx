import axios from "axios";
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes

// Create the user context using createContext
export const UserContext = createContext(); // Changed name to UserContext

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("called");
    axios.get("/profile").then(({ data }) => {
      console.log(data);
      setUser(data);
      localStorage
    });
  }, []);

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// Define propTypes for UserContextProvider component
UserContextProvider.propTypes = {
  children: PropTypes.node, // Validate that 'children' is a React node
};
