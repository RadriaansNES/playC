async function postPlaylistToSpotify(playlist, accessToken) {
    const userID = '226q73srbvdt5povk3f5td6xq';
  
    const playlistData = {
      name: playlist,
      public: true,
    };
  
    const Parameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken,
      },
      body: JSON.stringify(playlistData), // Convert the object to JSON string
    };

    console.log(playlist, accessToken);
  
    try {
      const response = await fetch('https://api.spotify.com/v1/users/' + userID + '/playlists', Parameters);
  
      if (response.ok) {
        // If the response status is 200-299, the playlist was created successfully
        const data = await response.json();
        // Do something with the response data if needed
      } else {
        // Handle the case when there's an error in creating the playlist
        console.error('Error creating playlist:', response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  export default postPlaylistToSpotify;
  