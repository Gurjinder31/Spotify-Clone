import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import "../css/App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./Spotify";
import { useDataLayerValue } from "./Datalayer";
import Player from "./Player";

// any source of interecation between react app to spotify
const spotify = new SpotifyWebApi();

function App() {
  // DataLayer.user
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // when ridirect to grab URL token
    const hash = getTokenFromUrl();
    // remove acces token from url to security reason
    window.location.hash = "";
    console.log("I have token >>", token);

    // hash in token variable
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      // its giving access token to spotify api
      spotify.setAccessToken(_token);
      // get user account
      spotify.getMe().then((user) => {
        console.log("😊", user);
        // dispatch user from spoitfy getMe user
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist("4KJ6WQhJ0hQ24KqOBkjS1W").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
    // [] it run once and add variable it run when variable change
  }, []);

  // it render to <Player /> once login in to _token get stored in state token
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
