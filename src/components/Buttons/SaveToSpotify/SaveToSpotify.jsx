import React from 'react';

const SaveToSpotify = ({ handlePost, clearInput }) => {
  return (
    <button type="button" onClick={() => { handlePost(); clearInput(); }}>SAVE TO SPOTIFY</button>
  );
};

export default SaveToSpotify;
