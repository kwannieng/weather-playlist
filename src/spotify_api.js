import SpotifyWebApi from 'spotify-web-api-js';


 const spotifyApi = new SpotifyWebApi();
// spotifyApi.setAccessToken('f99546973f964612b6e089da407ba9ae'); //access token

const accessToken = "f99546973f964612b6e089da407ba9ae";

fetch("https://api.spotify.com/v1/search?q=track:Believe&type=track&limit=10", {
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


export const search_tracks = (query) => {
  return spotifyApi.searchTracks(query);
};



