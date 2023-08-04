import React, { useState } from 'react';

const Playlist = () => {
  const [list, setList] = useState("");

  const handleClick = (event) => {

  };

  return (
    <form>
      <input
        type="text"
        value={list}
        onChange={(e) => setList(e.target.value)}
        onKeyDown={handleClick}
        placeholder='Enter a playlist name'
      />
    </form>
  );
};

export default Playlist;
