import axios from "axios";
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes

export const UserContext = createContext({}); // Changed variable name to follow convention

export function UserContextProvider({ children }) {
  // Changed function name to follow convention
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("called");
    axios.get("/profile").then(({ data }) => {
      setUser(data);
    });
  }, []); // Include an empty dependency array to fetch the profile once when the component mounts

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {" "}
      {/* Changed variable name to follow convention */}
      {children}
    </UserContext.Provider>
  );
}
UserContextProvider.propTypes = {
  children: PropTypes.node, // Validate that 'children' is a React node
};
