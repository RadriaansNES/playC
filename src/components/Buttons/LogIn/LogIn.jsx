import React from 'react';

const AuthButton = ({ setShowContent , setShowInitial}) => {

  const handleButtonClick = () => {
    
    setShowContent(true);
    setShowInitial(false);
    window.location.href = 'http://localhost:8888/login';
  };

  return (
    <button onClick={handleButtonClick}>Log in with Spotify</button>
  );
};

export default AuthButton;
