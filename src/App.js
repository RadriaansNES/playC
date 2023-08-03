import './App.css';
import React, { useState } from 'react';
import ColorChangingTitle from './components/ColorChange/ColorChange';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Tracklist from './components/Tracklist/Tracklist';
import SaveToSpotify from './components/Buttons/SaveToSpotify/SaveToSpotify';
import Search from './components/Api/Search';
import SearchButton from './components/Buttons/SearchButton/SearchButton'; 

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    Search(searchQuery);
  };

  const handleClearInput = () => {
    setSearchQuery("");
  };

  return (
    <div className="App">
      <ColorChangingTitle />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <SearchButton
        onClick={handleSearch}
        clearInput={handleClearInput}
      />
      <div className="content">
        <div className="results">
          <h2>Results</h2>
          <SearchResults />
        </div>
        <div className="playlist">
          <Playlist />
          <Tracklist />
          <SaveToSpotify />
        </div>
      </div>
    </div>
  );
}

export default App;
