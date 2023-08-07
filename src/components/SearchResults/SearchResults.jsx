import React from 'react';

const SearchResults = ({ returnedInfo }) => {
  // Extract the first 10 items from the returnedInfo object
  const firstTenItems = Object.values(returnedInfo).slice(0, 10);

  return (
    <div>
      {firstTenItems.map((item, index) => (
        <p key={index}>{item.songName}<br/>{item.artistName} - {item.albumName} </p>
      ))}
    </div>
  );
};

export default SearchResults;
