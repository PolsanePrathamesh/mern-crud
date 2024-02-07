import { useState } from "react";
import Signup from "./Signup";
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Routes>
     <Route path="/register" ></Route>
    </Routes>


    </BrowserRouter>
  );
}

export default App;
