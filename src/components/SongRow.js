import React from "react";
import "../css/SongRow.css";

const SongRow = ({ track = "test" }) => {
  return (
    <div className="songRow">
      <img src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => (artist) => artist.name).join(", ")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
