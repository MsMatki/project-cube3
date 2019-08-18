import React, { Fragment } from "react";
import classes from "./SectionFourth.module.css";
import img1 from "../../Assets/FountainHouse.png";
import img2 from "../../Assets/PalaceHotel.png";
import { Spring } from "react-spring/renderprops";

const SectionFourth = props => {
  return (
    <section className={`${classes.SectionFourth}`}>
      <div className="container">
        <div className="row justify-content-center">
          <Spring
            immediate={window.innerWidth < 768}
            from={{ opacity: 0, transform: "translateY(-200px)" }}
            to={
              props.active[6]
                ? { opacity: 1, transform: "translateX(0)" }
                : { opacity: 0 }
            }
            config={{ mass: 1,  tension: 280, friction: 60 }}
          >
            {props => (
              <div
                className={classes.FancyLine}
                style={window.innerWidth > 768 ? props : null}
              />
            )}
          </Spring>
          <Spring
          delay={700}
            immediate={window.innerWidth < 768}
            from={{ opacity: 0, transform: "translateY(40px)" }}
            to={
              props.active[6]
                ? { opacity: 1, transform: "translateX(0)" }
                : { opacity: 0 }
            }
            config={{ mass: 1, tension: 280, friction: 80 }}
          >
            {props => (
              <Fragment>
                <div
                  className="col-sm-12 col-md-12 col-lg-12 mb-5 text-center slideIn"
                  style={window.innerWidth > 768 ? props : null}
                >
                  <h2>Integer et ipsum</h2>
                </div>
                <div
                  className="col-sm-12 col-md-6 col-lg-6 "
                  style={window.innerWidth > 768 ? props : null}
                >
                  <div className={classes.Image}>
                    <img src={img1} alt="" />
                  </div>
                  <div className={classes.Grid}>
                    <hr className={classes.hr} />
                    <div className={classes.Content}>
                      <p>Lorem ipsum dolor</p>
                      <h4>Lorem ipsum dolor</h4>
                      <p>Lorem ipsum i Lorem ipsum i Lorem</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-12 col-md-6 col-lg-6"
                  style={window.innerWidth > 768 ? props : null}
                >
                  <div className={classes.Image}>
                    <img src={img2} alt="" />
                  </div>
                  <div className={classes.Grid}>
                    <hr className={classes.hr} />
                    <div className={classes.Content}>
                      <p>Integer et ipsum</p>
                      <h4>Integer et ipsum</h4>
                      <p>Lorem ipsum i Lorem ipsum i Lorem</p>
                    </div>
                  </div>
                </div>
              </Fragment>
            )}
          </Spring>
        </div>
       
      </div>
    </section>
  );
};

export default SectionFourth;
