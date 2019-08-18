import React from "react";
import Nav from "./Nav/Nav";
import classes from './Header.module.css'

const Header = (props) => {
   
const headerColor = !props.toggleMenu ? {backgroundColor: 'white'} : {backgroundColor: 'transparent'};

  return (
    <header className={classes.Header} style={headerColor}>
      <Nav
        toggleMenuHandler={props.toggleMenuHandler}
        hambMenuClass={props.hambMenuClass}
        menuToggleClass={props.menuToggleClass}
        toggleMenu={props.toggleMenu}
        menuText={props.menuText}
      />
    </header>
  );
};

export default Header;
