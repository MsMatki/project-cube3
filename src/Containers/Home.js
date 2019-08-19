import React, { Component } from "react";
import Header from "../Components/Navigation/Header/Header";
import navStyle from "../Components/Navigation/Header/Nav/Nav.module.css";
import MenuOverlay from "../Components/Navigation/MenuOverlay/MenuOverlay";
import SectionFirst from "../Components/SectionFirst/SectionFirst";
import SectionSecond from "../Components/SectionSecond/SectionSecond";
import SectionThird from "../Components/SectionThird/SectionThird";
import SectionFourth from "../Components/SectionFourth/SectionFourth";
import Footer from "../Components/Navigation/Footer/Footer";
import Form from "../Components/Form/Form";

export class Home extends Component {
  state = {
    toggleMenu: false,
    hambMenuClass: "",
    menuToggleClass: "",
    menuText: "MENU",
    halfShown: false
  };

  componentDidMount() {
    document.addEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    const slideSections = document.querySelectorAll(".slideIn");

    slideSections.forEach(slideSection => {
      const slideInAt =
        window.scrollY + window.innerHeight - slideSection.offsetHeight / 2;
      const isHalfShown = slideInAt > slideSection.offsetTop;
      this.setState({ halfShown: isHalfShown });

      if (this.state.halfShown) {
        slideSection.classList.add("active");
      }
    });
  };

  toggleMenuHandler = () => {
    if (!this.state.toggleMenu) {
      this.setState({
        toggleMenu: true,
        hambMenuClass: navStyle.open,
        menuToggleClass: navStyle.OpenOverlay,
        menuText: "CLOSE"
      });
    } else {
      this.setState({
        toggleMenu: false,
        hambMenuClass: "",
        menuToggleClass: "",
        menuText: "MENU"
      });
    }
  };

  componentWillUnmount() {
    document.removeEventListener("scroll", this.onScroll);
  }

  render() {
    const active = document.querySelectorAll(".active");
    return (
      <div>
        <MenuOverlay menuToggleClass={this.state.menuToggleClass} />
        <Header
          toggleMenuHandler={this.toggleMenuHandler}
          hambMenuClass={this.state.hambMenuClass}
          toggleMenu={this.state.toggleMenu}
          menuText={this.state.menuText}
        />
        <SectionFirst active={active} />
        <SectionSecond active={active} />
        <SectionThird active={active} />
        <SectionFourth active={active} />
        <Form active={active} />
        <Footer />
      </div>
    );
  }
}

export default Home;
