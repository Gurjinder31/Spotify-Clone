import React from "react";

import "../css/login.css";
import { loginUrl } from "./Spotify";

const Login = () => {
  return (
    <div className="login">
      <img
        src="https://iaudioguide.com/wp-content/uploads/2014/12/spotify-logo-primary-horizontal-dark-background-rgbizi.jpg"
        alt=""
      />

      {/* Login with Spotify button */}
      <a href={loginUrl}>Login with Spoitfy</a>
    </div>
  );
};

export default Login;
