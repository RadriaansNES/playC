import React from 'react';

const SearchButton = ({ handleSearch, clearInput }) => {
  return (
    <button type="button" onClick={() => { handleSearch(); clearInput(); }}>
      SEARCH
    </button>
  );
};

export default SearchButton;
