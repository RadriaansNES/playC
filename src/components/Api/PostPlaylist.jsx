async function postPlaylistToSpotify(playlist, accessToken) {
  const playlistData = {
    name: playlist,
    description: 'Sent from Ryguys Spotify App!',
    public: true,
  };

  const getUserInfoOptions = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + accessToken,
    },
  };

  try {
    
    const response = await fetch('https://api.spotify.com/v1/me', getUserInfoOptions);
    const userData = await response.json();

    if (!userData.id) {
      console.error('Error getting user ID:', userData);
      return;
    }

   
    const createPlaylistOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken,
      },
      body: JSON.stringify(playlistData),
    };

    const createPlaylistResponse = await fetch(`https://api.spotify.com/v1/users/${userData.id}/playlists`, createPlaylistOptions);

    if (createPlaylistResponse.ok) {
     
      console.log('Playlist created successfully');
    } else {
      console.error('Error creating playlist:', createPlaylistResponse.status, createPlaylistResponse.statusText);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export default postPlaylistToSpotify;
