import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, signOut } = useContext(AuthContext);

  return (
    <header>
      {user ? <button onClick={signOut}>Logout</button> : <p>Welcome, Guest</p>}
    </header>
  );
};


export default Header;
