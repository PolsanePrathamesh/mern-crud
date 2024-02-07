// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import axios from "axios";
import { UserContextProvider } from "../context/userContext";
import ProtectedRoute from "./ProtectedRoute";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<ProtectedRoute />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/create-course"/>
          </Route>
          {/* Use 'component' prop */}
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
