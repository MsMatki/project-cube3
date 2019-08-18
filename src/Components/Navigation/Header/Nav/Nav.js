import React, { Component } from "react";
import classes from "./Nav.module.css";
import LogoWhite from '../../../../Assets/cubeLogoWhite.png'
import LogoBlack from '../../../../Assets/cubeLogoBlack.png'

class Nav extends Component {
  render() {
    const hambColor = !this.props.toggleMenu
      ? { backgroundColor: "black" }
      : { backgroundColor: "white" };
    const logoColor = !this.props.toggleMenu
      ? LogoBlack
      : LogoWhite;
    const menuColor = !this.props.toggleMenu
      ? { color: "black" }
      : { color: "white" };
      const linkColor = !this.props.toggleMenu
      ? { color: "black" }
      : { color: "transparent" };

    return (
      <div className="container">
        <nav className={classes.Nav}>
          <div className={classes.Logo}>
            <img src={logoColor} alt=""/>
          </div>
          <div className={classes.Items} >
            <ul >
              <li><a style={linkColor} href="">Menu Item</a></li>
              <li><a style={linkColor} href="">Menu Item</a></li>
              <li><a style={linkColor} href="">Menu Item</a></li>
            </ul>
          </div>
          
          <div className={classes.HambMenu}>
            <span className={classes.MenuText} style={menuColor}>{this.props.menuText}</span>
          <div
            id={classes.navIcon1}
            onClick={() => this.props.toggleMenuHandler()}
            className={this.props.hambMenuClass}
          >
            <span style={hambColor} />
            <span style={hambColor} />
            <span style={hambColor} />
          </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
