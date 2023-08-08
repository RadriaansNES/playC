import React from 'react';

const Playlist = ({playlist, setPlaylist, handlePost, clearInput}) => {

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handlePost();
      clearInput();

    }
  };

  return (
    <form>
      <input
        type="text"
        value={playlist}
        onChange={(e) => setPlaylist(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Enter a playlist name'
      />
    </form>
  );
};

export default Playlist;
