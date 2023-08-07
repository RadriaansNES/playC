import React from 'react';

const SearchResults = ({ returnedInfo }) => {
  // Extract the first 10 items from the returnedInfo object
  const firstTenItems = Object.values(returnedInfo).slice(0, 10);

  return (
    <div className="searchResultsContainer">
      {firstTenItems.map((item, index) => (
        <div key={index} className="searchResultItem">
          <p>{item.songName}<br/>{item.artistName} - {item.albumName}</p>
          <button>+</button>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
