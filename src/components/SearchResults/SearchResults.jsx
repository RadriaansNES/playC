import React from 'react';

const SearchResults = ({ returnedInfo, addToTracklist }) => {
  // Extract the first 10 items from the returnedInfo object
  const firstTenItems = Object.values(returnedInfo).slice(0, 20);

  return (
    <div className="searchResultsContainer">
      {firstTenItems.map((item, index) => (
        <div key={index} className="searchResultItem">
          <p>{item.songName}<br/>{item.artistName} - {item.albumName}</p>
          <button onClick={() => addToTracklist(item)}>+</button>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
