import React, { useContext, useState, useEffect } from "react";
import "./styles/Sidebar.css";
import { Link, Redirect } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";

import { useSavedSessionState } from "../../redux/hooks/useSavedSessionState";
export default function Sidebar() {
  const [isOpen, setOpen] = useState(false);
  const { loggedIn, setLoggedIn } = useSavedSessionState();

  const updateSidebar = () => setOpen(!isOpen);

  const handleLogout = () => {
    setLoggedIn("false");
  };

  return (
    <>
      {loggedIn === "false" ? <Redirect to="/login" /> : ""}
      {/* <div className="navbar">
        <FaIcons.FaBars onClick={updateSidebar} />
        <button className="logout-button" onClick={handleLogout}>
          Log out
        </button>
      </div>
      <nav className={isOpen ? "nav-menu active" : "nav-menu"}>
        <div className="navbar-close">
          <FaIcons.FaColumns onClick={updateSidebar} />
        </div>
        <div className="container-sidebar">
          <ul className="container-list-sidebar">
            {SidebarData.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>
      </nav> */}

      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={updateSidebar} />
        </Link>
        <button className="logout-button" onClick={handleLogout}>
          Log out
        </button>
      </div>
      <nav className={isOpen ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={updateSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
