const handlePost = () => {
    if (playlist !== '') {
      postPlaylistToSpotify(playlist, accessToken);
      setPlaylist("");
      setTracklistData([]);
      setReturnedInfo([]);
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);
    }
  };

  export default handlePost;