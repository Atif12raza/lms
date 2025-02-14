import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const uid = localStorage.getItem('uid') || sessionStorage.getItem('uid');
    if (uid) {
      setIsLoggedIn(true); 
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('uid');
    sessionStorage.removeItem('uid');

    setIsLoggedIn(false);

    navigate('/login');
  };

  if (!isLoggedIn) {
    return null; 
  }

  return (
    <div style={{ textAlign: 'right', marginTop: '26px', marginRight: '70px' }}>
      <button style={{ padding: '5px' }} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
