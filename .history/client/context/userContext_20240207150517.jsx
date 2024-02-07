import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const userContext = createContext({});

export function UserContextProvider({ children }) {
  // Changed function name to follow convention
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("called");
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, [user]); // Include user in the dependency array to trigger the effect when user changes
  const logout = () => {
    setUser(null);
  };
  return (
    <userContext.Provider value={{ user, setUser, logout }}>
      {" "}
      {/* Pass an object as value */}
      {children}
    </userContext.Provider>
  );
}
