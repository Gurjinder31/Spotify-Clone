import React from "react";
import "../css/Sidebar.css";
import { useDataLayerValue } from "./Datalayer";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log("playlists>>", playlists);
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://iaudioguide.com/wp-content/uploads/2014/12/spotify-logo-primary-horizontal-dark-background-rgbizi.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library " />
      <br />
      <strong className="sidebar_title">Playlist</strong>
      <hr />
      {playlists?.items?.map((playlist) => {
        <SidebarOption title={playlist.name} />;
      })}
    </div>
  );
};

export default Sidebar;
