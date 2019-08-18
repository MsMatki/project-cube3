import React from "react";
import classes from "./MenuOverlay.module.css";
import menuStyle from "../Header/Nav/Nav.module.css";

const MenuOverlay = props => {
  return (
    <div>
      <div className={`${menuStyle.MenuOverlay} ${props.menuToggleClass}`}>
        <div className="container">
          <div className="row justify-content-center align-items-center text-lg-left text-md-left text-sm-center ml-lg-5 ml-md-5">
            <div className="col-sm-12 col-md-4 col-lg-3">
              <ul className={`${classes.MainMenu} ${classes.Primary}`}>
                <li><a href="">Process</a></li>
                <li><a href="">People</a></li>
                <li><a href="">Awards</a></li>
                <li><a href="">Contact</a></li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-2">
              <ul className={`${classes.MainMenu} ${classes.Secondary}`}>
              <li><a href="">Blog</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">T&C</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
