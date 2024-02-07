import React, { useContext } from 'react';
import { UserContext } from './userContext';

function App() {
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    // Call logout function from user context
    logout();
  };

  return (
    <div>
      <h1>Welcome {user ? user.name : 'Guest'}</h1>
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}

export default App;
