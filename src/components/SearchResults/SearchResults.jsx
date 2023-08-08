import React from 'react';

const SearchResults = ({ returnedInfo, setTracklistData }) => {
  // Extract the first 10 items from the returnedInfo object
  const firstTenItems = Object.values(returnedInfo).slice(0, 20);

  const addToTracklist = (item) => {
    setTracklistData((prevTracklistData) => [...prevTracklistData, item]);
  };

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
