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

function App() {
  const accessToken = ApiConnect(); //since behind the scenes, not render just function
  const [searchQuery, setSearchQuery] = useState(""); //since rendered
  const [returnedInfo, setReturnedInfo] = useState([]);
  const [tracklistData, setTracklistData] = useState([]);
  const [showContent, setShowContent] = useState(false);

  //Functions to be used in other componenets
  const handleSearch = () => {
    Search(searchQuery, accessToken, setReturnedInfo);
    setShowContent(true);
  };

  const handleClearInput = () => {
    setSearchQuery("");
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

  //frame 
  return (
    <div className="App">
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
      {showContent && (
        <div className="content">
          <div className="results">
            <h2>Results</h2>
            <SearchResults returnedInfo={returnedInfo} addToTracklist={addToTracklist} />
          </div>
          <div className="playlist">
            <Playlist />
            <Tracklist tracklistData={tracklistData} removeFromTracklist={removeFromTracklist} />
            <SaveToSpotify />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
