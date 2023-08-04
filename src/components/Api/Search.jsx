import React, { useState, useEffect } from 'react';

async function Search(searchQuery, accessToken, setReturnedInfo) {
  console.log("Searching for " + searchQuery);

  var Parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken
    }
  };

  try {
    const response = await fetch('https://api.spotify.com/v1/search?q=' + searchQuery + '&type=track', Parameters);
    const data = await response.json();

    const first10Items = data.tracks.items.slice(0, 10);
    const extractedData = first10Items.map(item => {
      return {
        songName: item.name,
        artistName: item.artists[0].name,
        albumName: item.album.name
      };
    });

    setReturnedInfo(extractedData);
    console.log(extractedData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default Search;
