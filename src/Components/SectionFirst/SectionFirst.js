import React, { Fragment } from "react";
import HeroImage from "../../Assets/Hero.png";
import classes from "./SectionFirst.module.css";
import { Spring } from "react-spring/renderprops";

const SectionFirst = props => {
  return (
    <section className={`${classes.SectionFirst} slideIn`}>
      <div className="container">
        <div className="row justify-content-center text-left mb-5 mt-5">
          <Spring
            immediate={window.innerWidth < 768}
            from={{ opacity: 0, transform: "translateX(-200px)" }}
            to={{ opacity: 1, transform: "translateX(0)" }}
            config={{ mass: 1, tension: 280, friction: 80 }}
          >
            {props => (
              <div
                className="col-xs-12 col-md-6 col-lg-5 col-sm-10"
                style={window.innerWidth > 768 ? props : null}
              >
                <div className={classes.Headings}>
                  <h5>Lorem ipsum dolor</h5>
                  <h1>Lorem ipsum dolor</h1>
                </div>
              </div>
            )}
          </Spring>
          <Spring
            immediate={window.innerWidth < 768}
            from={{ opacity: 0, transform: "translateX(200px)" }}
            to={{ opacity: 1, transform: "translateX(0)" }}
            config={{ mass: 1, tension: 280, friction: 80 }}
          >
            {props => (
              <div
                className="col-xs-12 col-md-6 col-lg-4 mt-5 col-sm-10"
                style={window.innerWidth > 768 ? props : null}
              >
                <p className={classes.Text}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quaerat explicabo cumque, quasi voluptatem molestiae eaque
                  optio exercitationem quae debitis totam fuga non possimus id
                  rem ea? Sapiente consequatur adipisci vel amet. Sit eum libero
                  dignissimos obcaecati asperiores vero est molestias. quasi
                  voluptatem molestiae!
                </p>
                <div className={classes.Expand}>
                  <h6>Read More</h6>
                  <span>&rsaquo;</span>
                </div>
              </div>
            )}
          </Spring>
        </div>
      </div>
      <Spring
        immediate={window.innerWidth < 768}
        delay={300}
        from={{ opacity: 0, transform: "translateY(30px)" }}
        to={{ opacity: 1, transform: "translateX(0)" }}
        config={{ mass: 1, tension: 280, friction: 80 }}
      >
        {props => (
          <div
            className={classes.HeroImage}
            style={window.innerWidth > 768 ? props : null}
          >
            <img src={HeroImage} alt="" />
            <div
              className="container"
              style={window.innerWidth > 768 ? props : null}
            >
              <div className="row justify-content-left pl-lg-5 pl-md-5 text-left">
                <div
                  className="col-xs-12 col-md-6 col-lg-5 col-sm-10 mt-2"
                  style={{ fontSize: "0.7em", color: "grey" }}
                >
                  <p>Image Caption Goes Here</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>
    </section>
  );
};

export default SectionFirst;
