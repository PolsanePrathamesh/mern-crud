import { useState } from "react";
import Signup from "./Signup";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
    <Routes route='/signup' />


    </Router>
  );
}

export default App;
