import React from 'react';

const SearchButton = ({ onClick, clearInput }) => {
  return (
    <button type="button" onClick={() => { onClick(); clearInput(); }}>
      SEARCH
    </button>
  );
};

export default SearchButton;
