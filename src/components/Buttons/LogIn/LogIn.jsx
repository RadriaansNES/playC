import React from 'react';

const AuthButton = ({ setShowContent , setShowInitial}) => {

  const handleButtonClick = () => {
    // Call the setShowContent function to set showContent to true
    setShowContent(true);
    setShowInitial(false);
    /*window.location.href = 'http://localhost:8888';*/
  };

  return (
    <button onClick={handleButtonClick}>Log in with Spotify</button>
  );
};

export default AuthButton;
