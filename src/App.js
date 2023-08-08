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
  const accessToken = ApiConnect(); //since behind the scenes, not render just function
  const [searchQuery, setSearchQuery] = useState(""); //since rendered
  const [returnedInfo, setReturnedInfo] = useState([]);
  const [tracklistData, setTracklistData] = useState([]);
  const [playlist, setPlaylist] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [showInitial, setShowInitial] = useState(true);

  //Functions to be used in other components
  const handleSearch = () => {
    Search(searchQuery, accessToken, setReturnedInfo);
    setShowContent(true);
    setShowInitial(false);
  };

  const handleClearInput = () => {
    setSearchQuery("");
  };

  const handleClearPlaylist = () => {
    setPlaylist("");
  };

  const addToTracklist = (item) => {
    setTracklistData((prevTracklistData) => [...prevTracklistData, item]);
  };

  const removeFromTracklist = (index) => {
    setTracklistData((prevTracklistData) => {
      const newTracklistData = [...prevTracklistData];
      newTracklistData.splice(index, 1);
      return newTracklistData;
    });
  };

  const handlePost = () => {
    postPlaylistToSpotify(playlist, accessToken);
  };

  //frame 
  return (
    <div className="App">
      {showInitial && (
      <div className='initial'>
        <ColorChangingTitle />
        <AuthButton />
      </div>
      )}


      {showContent && (
        <div className='postwrap'>
          <ColorChangingTitle />
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearch}
            clearInput={handleClearInput}
          />
          <SearchButton
            handleSearch={handleSearch}
            clearInput={handleClearInput}
          />
          <div className="content">Y
            <div className="results">
              <h2>Results</h2>
              <SearchResults returnedInfo={returnedInfo} addToTracklist={addToTracklist} />
            </div>
            <div className="playlist">
              <Playlist playlist={playlist} setPlaylist={setPlaylist} clearInput={handleClearPlaylist} handlePost={handlePost}/>
              <Tracklist tracklistData={tracklistData} removeFromTracklist={removeFromTracklist} />
              <SaveToSpotify handlePost={handlePost} clearInput={handleClearPlaylist}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
