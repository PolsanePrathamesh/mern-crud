import { useState } from "react";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Routes>
     <Route path="/register" element={<Signup />} />
     <Route path="/register" element={<Signup />} />
    </Routes>


    </BrowserRouter>
  );
}

export default App;
