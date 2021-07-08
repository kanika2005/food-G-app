import React from "react";
import PropTypes from "prop-types";

// material ui core
import { Avatar } from "@material-ui/core";

// material ui icons
import HomeIcon from "@material-ui/icons/Home";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";

import "./BurgerNavbar.scss";

BurgerNavbar.propsTypes = {
  user: PropTypes.object,

  isShow: PropTypes.bool.isRequired,
  showBurgerNav: PropTypes.func.isRequired,
};

BurgerNavbar.defaultProps = {
  user: null,
};

function BurgerNavbar(props) {
  const { user, isShow, showBurgerNav } = props;

  return (
    <div className="burger-nav">
      <div
        className={
          isShow ? "burger-nav__content active" : "burger-nav__content"
        }
      >
        {user ? (
          <div className="burger-nav__account">
            <Avatar src={user.photoURL} className="burger-nav__icon" />
            <div className="burger-nav__username">{user.displayName}</div>
          </div>
        ) : (
          <div className="burger-nav__account">
            <Avatar className="burger-nav__icon" />
            <div className="burger-nav__username">Sign In</div>
          </div>
        )}

        <ul className="burger-nav__list">
          <li className="burger-nav__item">
            <HomeIcon />
            Pages
          </li>
          <li className="burger-nav__item">
            <RestaurantMenuIcon /> Order online
          </li>
          <li className="burger-nav__item">
            <LibraryBooksIcon /> News
          </li>
          <li className="burger-nav__item">
            <StoreMallDirectoryIcon /> Store locations
          </li>
        </ul>
      </div>

      <span
        className={
          isShow ? "burger-nav__overlay active" : "burger-nav__overlay"
        }
        onClick={showBurgerNav}
      ></span>
    </div>
  );
}

export default BurgerNavbar;