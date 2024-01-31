import React from "react";
import {Logo} from "../logo/Logo";
import { NavLink } from "react-router-dom";
import MapLocation from "../header/mapLocation/MapLocation";
import UserEntry from "../header/userEntry/UserEntry";
import Basket from "../header/basket/Basket";
import { BiSolidDownArrow } from "react-icons/bi";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header_container container">
          <div className="logo">
            <NavLink to="/">
              <Logo />
            </NavLink>
          </div>
          <MapLocation />
          <div className="header-main">
            <UserEntry />
            <Basket />
            <div className="site_language">
              <span>
                en <BiSolidDownArrow fontSize="10px" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
