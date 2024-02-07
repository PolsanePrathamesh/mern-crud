import { useState } from "react";
import Signup from "./Signup";
import {br} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Signup />
    </div>
  );
}

export default App;
