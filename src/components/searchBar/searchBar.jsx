import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch, clearInput}) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
      clearInput();
    }
  };

  return (
    <form>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </form>  
  );
};

export default SearchBar;
