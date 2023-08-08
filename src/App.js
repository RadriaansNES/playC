import './App.css';
import React, { useState } from 'react';
import ColorChangingTitle from './components/ColorChange/ColorChange';
import SearchBar from './components/SearchBar/searchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Tracklist from './components/Tracklist/Tracklist';
import SaveToSpotify from './components/Buttons/SaveToSpotify/SaveToSpotify';
import Search from './components/Api/Search';
import SearchButton from './components/Buttons/SearchButton/SearchButton';
import ApiConnect from './components/Api/Api';
import postPlaylistToSpotify from './components/Api/PostPlaylist';
import AuthButton from './components/Buttons/LogIn/LogIn';

function App() {
  const accessToken = ApiConnect();
  const [searchQuery, setSearchQuery] = useState("");
  const [playlist, setPlaylist] = useState("");
  const [returnedInfo, setReturnedInfo] = useState([]);
  const [tracklistData, setTracklistData] = useState([]);
  const [showContent, setShowContent] = useState(false);
  const [showInitial, setShowInitial] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSearch = () => {
    if (searchQuery !== '') {
      Search(searchQuery, accessToken, setReturnedInfo);
      setSearchQuery("");
    }
  };

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

  return (
    <div className="App">
      {showInitial && (
        <div className='initial'>
          <ColorChangingTitle />
          <AuthButton setShowContent={setShowContent} setShowInitial={setShowInitial} />
        </div>
      )}


      {showContent && (
        <div className='postwrap'>
          <ColorChangingTitle />
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearch}
          />
          <SearchButton
            handleSearch={handleSearch}
          />
          <div className="content">
            <div className="results">
              <h2>Results</h2>
              <SearchResults returnedInfo={returnedInfo} setTracklistData={setTracklistData} />
            </div>
            <div className="playlist">
              <Playlist playlist={playlist} setPlaylist={setPlaylist} handlePost={handlePost} />
              <Tracklist tracklistData={tracklistData} setTracklistData={setTracklistData} />
              <SaveToSpotify handlePost={handlePost} />
            </div>
          </div>
          {showSuccessMessage && <button className="successMessage">Playlist saved successfully!</button>}
        </div>
      )}
    </div>
  );
}

export default App;
