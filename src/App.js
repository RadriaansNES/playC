import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 id = "header"> Playlist Creator</h1>
      <searchBar />
      <searchButton />
      <div class = "content">
        <div class = "results">
          <h2>Results</h2>
          <searchResults />
        </div>
        <div class = "playlist" />
          <tracklist />
          <saveToSpotify />
      </div>
    </div>
  );
}

export default App;
