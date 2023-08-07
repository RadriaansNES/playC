import React from 'react';

const Tracklist = ({ tracklistData, removeFromTracklist }) => {
  return (
    <div className='trackListContainer'>
      {tracklistData.map((item, index) => (
        <div key={index} className='trackListItem'>
          <p>{item.songName}<br/>{item.artistName} - {item.albumName}</p>
          <button onClick={() => removeFromTracklist(index)}>-</button>
        </div>
      ))}
    </div>
  );
};

export default Tracklist;
