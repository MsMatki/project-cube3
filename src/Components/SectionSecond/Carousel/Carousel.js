import React, { Component } from "react";
import img1 from "../../../Assets/arhitectureCarpet.png";
import img2 from "../../../Assets/bookCasualFashion.png";
import img3 from "../../../Assets/apartmentArchitecture.png";
import img4 from "../../../Assets/apartmentArhitecture2.png";
import img5 from "../../../Assets/arhitectureHome.png";
import img6 from "../../../Assets/apartment-dining.png";
import img7 from "../../../Assets/apartment-living.png";
import img8 from "../../../Assets/apartment-kitchen.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./Carousel.module.css";
import { Spring } from "react-spring/renderprops";
import Slider from "react-slick";

export class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,

      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 499,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        
          }
        }
      ]
    };

    return (
      <Spring
        immediate={window.innerWidth < 768}
        from={{ opacity: 0, transform: "translateY(50px)" }}
        to={
          this.props.active[2]
            ? { opacity: 1, transform: "translateX(0)" }
            : { opacity: 0 }
        }
        config={{ mass: 1, tension: 280, friction: 80 }}
      >
        {props => (
          <div>
            <Slider
              {...settings}
              style={window.innerWidth > 768 ? props : null}
              className="slideIn"
            >
              <div className={classes.Images}>
                <img src={img1} alt="" />
              </div>

              <div className={classes.Images}>
                <img src={img2} alt="" />
              </div>

              <div className={classes.Images}>
                <img src={img3} alt="" />

                <img src={img4} alt="" />
              </div>

              <div className={classes.Images}>
                <img src={img5} alt="" />
              </div>

              <div className={classes.Images}>
                <img src={img6} alt="" />
              </div>

              <div className={classes.Images}>
                <img src={img7} alt="" />

                <img src={img8} alt="" />
              </div>
            </Slider>
            <div className={classes.Caption}>
              <span />
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default Carousel;
