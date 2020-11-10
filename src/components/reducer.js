// intial data layer
export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token:
    "BQAr5OsRX0KjfATImRxChgO4gpSwDnYSGhkB3z3Imko8-lrMNa…svC2IRdwdsuVGCGl_otnSygsX8i8v3mXkxCIOElIGzYwxiYNQ",
};
// sate is current state and action to manipulate data
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        // change stage of user
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      break;
  }
};
export default reducer;
