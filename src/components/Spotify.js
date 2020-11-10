export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000";

const clientid = "6d8cd0a9f776415daeacfd71017716a8";

// scopes
// allow to play songs , recenly playd stuff like that

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// goes to location # pull urltoken
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      // #accestoken- mysuperkey&name=GS
      let parts = item.split("=");
      // parts = accestoke then decode is mysuperkey
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

// logoin url with endpoint and queries parameter with id, scopes, ridercturi

export const loginUrl = `${authEndpoint}?client_id=${clientid}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
