async function postPlaylistToSpotify(playlist, accessToken) {
    const userID = '226q73srbvdt5povk3f5td6xq';
  
    const playlistData = {
      name: playlist,
      description: 'Sent from Ryguys Spotify App!',
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
      const response = await fetch('https://api.spotify.com/v1/users/' + userID + '/playlists' , Parameters);
  
      if (response.ok) {
        
      } else {
        
        console.error('Error creating playlist:', response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  export default postPlaylistToSpotify;
  