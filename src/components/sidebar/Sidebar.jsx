import "./Sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">DashBoard</h3>
          <ul className="sideBarList">
            <Link to="/" className="link">
              <li className="sideBarItem active">
                <LineStyle className="sideBarIcon" />
                Home
              </li>
            </Link>
            <li className="sideBarItem">
              <Timeline className="sideBarIcon" />
              Analytics
            </li>
            <li className="sideBarItem">
              <TrendingUp className="sideBarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Quick Menu</h3>
          <ul className="sideBarList">
            <Link to="/users" className="link">
              <li className="sideBarItem ">
                <PermIdentity className="sideBarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sideBarItem">
                <Storefront className="sideBarIcon" />
                Products
              </li>
            </Link>
            <li className="sideBarItem">
              <AttachMoney className="sideBarIcon" />
              Transactions
            </li>
            <li className="sideBarItem">
              <BarChart className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Notifications</h3>
          <ul className="sideBarList">
            <li className="sideBarItem ">
              <MailOutline className="sideBarIcon" />
              Mail
            </li>
            <li className="sideBarItem">
              <DynamicFeed className="sideBarIcon" />
              Feedback
            </li>
            <li className="sideBarItem">
              <ChatBubbleOutline className="sideBarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Staff</h3>
          <ul className="sideBarList">
            <li className="sideBarItem ">
              <WorkOutline className="sideBarIcon" />
              Manage
            </li>
            <li className="sideBarItem">
              <Timeline className="sideBarIcon" />
              Analytics
            </li>
            <li className="sideBarItem">
              <Report className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
