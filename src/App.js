import './App.css';
import React, { useState } from 'react';
import { search_tracks } from './spotify_api';


function App() {
  const [query, setQuery] = useState('');
  const [tracks, setTracks] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    const result = search_tracks(query);
    result
      .then((response) => {
        setTracks(response.tracks.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Search for Tracks on Spotify</h1>
      <input type="text" value={query} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search Tracks</button>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <img src={track.album.images[0].url} alt={track.name} />
            <h2>{track.name}</h2>
            <p>{track.artists.map((artist) => artist.name).join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;







