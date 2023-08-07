import React from 'react';

const SaveToSpotify = ({ postPlaylistToSpotify, clearInput, playlist, accessToken }) => {
  return (
    <button type="button" onClick={() => { postPlaylistToSpotify(playlist, accessToken); clearInput(); }}>SAVE TO SPOTIFY</button>
  );
};

export default SaveToSpotify;
