import React from 'react';

const AUTH_URL = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = '863b560bcdb644b498038d8fcdf368e7';
const REDIRECT_URI = 'http://localhost:3000/';
const SCOPE = 'user-library-read playlist-modify-public'; 

const AuthButton = () => {
  const authParams = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    scope: SCOPE,
  });

  return (
    <button onClick={() => window.location.href = `${AUTH_URL}?${authParams}`}>Log in with Spotify</button>
  );
};

export default AuthButton;
