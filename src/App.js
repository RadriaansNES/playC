import './App.css'; //proper form would be to bring individual css in from each component
import SearchButton from './components/Buttons/Search/Search';
import ColorChangingTitle from './components/ColorChange/ColorChange';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Tracklist from './components/Tracklist/Tracklist';
import SaveToSpotify from './components/Buttons/SaveToSpotify/SaveToSpotify';

function App() {
  return (
    <div className="App">
      <ColorChangingTitle />
      <SearchBar />
      <SearchButton />
      <div class="content">
        <div class="results">
          <h2>Results</h2>
          <SearchResults />
        </div>
        <div class="playlist">
          <Playlist />
          <Tracklist />
          <SaveToSpotify />
        </div>
      </div>
    </div>
  );
}

export default App;
