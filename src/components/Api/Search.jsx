import React, { useState, useEffect } from 'react';

async function Search(searchQuery, accessToken) {
    console.log("Searching for " + searchQuery); 

    var Parameters = {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : 'Bearer ' + accessToken
        }
    }

    //could save artistId and songname to a seperate json, referencing the same to extract data. Likewise with the 3 below referencing their own Json from artist
    var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchQuery + '&type=track', Parameters)
    .then(response => response.json())
    .then(data => {return data.tracks.items[0].artists[0].id})

    var songName = await fetch('https://api.spotify.com/v1/search?q=' + searchQuery + '&type=track', Parameters)
    .then(response => response.json())
    .then(data => {return data.tracks.items[0].name})

    var albumName = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&limit=20', Parameters)
    .then(response => response.json())
    .then(data => {return data.items[0].name})

    var albumPicture = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&limit=20', Parameters)
    .then(response => response.json())
    .then(data => {return data.items[0].images[0].url})

    var artistName = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&limit=20', Parameters)
    .then(response => response.json())
    .then(data => {return data.items[0].artists[0].name})

    console.log(songName, artistName, albumName)

}   

export default Search;