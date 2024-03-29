// App.js
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import axios from "axios";
import { UserContextProvider } from "../context/userContext";
import ProtectedRoute from "./ProtectedRoute";
import CreateCourse from "./CreateCourse";
import UpdateCourse from "./UpdateCourse";

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
          </Route>
          <Route path="/create-course" element={<ProtectedRoute />}>
            <Route path="/create-course" element={<CreateCourse />} />
          </Route>
          <Route path="/update-course/:id" element={<UpdateCourse />} />
          {/* Use 'component' prop */}
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
