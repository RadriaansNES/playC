import React, { useState, useEffect } from 'react';

async function Search(searchQuery, accessToken) {
    console.log("Searching for " + searchQuery); 

    var artistParameters = {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : 'Bearer ' + accessToken
        }
    }

    var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchQuery + '&type=artist', artistParameters)
    .then(response => response.json())
    .then(data => console.log(data))

}

export default Search;