import React, { useState } from 'react';

const SearchBar = () => {
  const [name, setName] = useState("");

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {

    }
  };

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </form>
  );
};

export default SearchBar;
