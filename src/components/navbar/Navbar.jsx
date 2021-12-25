import React from "react";
import "./Navbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navBarWrapper">
        <div className="topLeft">
          <span className="logo">Baddel Admin DashBoard</span>
        </div>
        <div className="topRight">
          <div className="navBarContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="navBarContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="navBarContainer">
            <Settings />
          </div>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/906/603/803/yamaha-fz-10-2017-bikes-sportbikes-4k-wallpaper-thumb.jpg"
            alt="baddel"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
