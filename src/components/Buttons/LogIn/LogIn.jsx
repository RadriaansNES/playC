import React from 'react';

const AUTH_URL = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = '863b560bcdb644b498038d8fcdf368e7';
const REDIRECT_URI = 'http://localhost:3000/';
const SCOPE = 'user-library-read playlist-modify-public'; 

const AuthButton = ({ setShowContent , setShowInitial}) => {
  const authParams = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    scope: SCOPE,
  });

  const handleButtonClick = () => {
    // Call the setShowContent function to set showContent to true
    setShowContent(true);
    setShowInitial(false);
    
    // Redirect the user to the Spotify authorization page
    /*window.location.href = `${AUTH_URL}?${authParams}`;*/
  };

  return (
    <button onClick={handleButtonClick}>Log in with Spotify</button>
  );
};

export default AuthButton;
