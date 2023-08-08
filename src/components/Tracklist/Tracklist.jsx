import React from 'react';

const Tracklist = ({ tracklistData, setTracklistData }) => {

  const removeFromTracklist = (index) => {
    setTracklistData((prevTracklistData) => {
      const newTracklistData = [...prevTracklistData];
      newTracklistData.splice(index, 1);
      return newTracklistData;
    });
  };


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
