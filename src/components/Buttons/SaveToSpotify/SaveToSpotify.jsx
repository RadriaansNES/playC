import React from 'react';

const SaveToSpotify = ({ handlePost }) => {
  return (
    <button type="button" onClick={() => { handlePost(); }}>SAVE TO SPOTIFY</button>
  );
};

export default SaveToSpotify;
