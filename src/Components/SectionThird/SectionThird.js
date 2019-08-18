import React from "react";
import classes from "./SectionThird.module.css";
import bImage from '../../Assets/working.png';
import { Spring } from "react-spring/renderprops";

const SectionThird = (props) => {
  return (
    <section className={`${classes.SectionThird}`}>
      <div className="container">
      <Spring
          immediate={window.innerWidth < 768}
          from={{ opacity: 0, transform: "translateX(-200px)" }}
          to={
            props.active[3]
              ? { opacity: 1, transform: "translateX(0)" }
              : { opacity: 0 }
          }
          config={{ mass: 1, tension: 280, friction: 80 }}
        >
          {props => (
        <div className="row justify-content-center slideIn" style={window.innerWidth > 768 ? props : null}>
          <div className="col-sm-12 col-md-9 col-lg-7 mb-4">
            <div className={classes.Content}>
             <div className={classes.Heading}>
            <hr className={classes.Border}/><h4>Lorem ipsum</h4>
            </div>
              <p className={classes.Text}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate consectetur, sint totam neque vero laudantium.
              </p>
            </div>
          </div>
        </div>
          )}
</Spring>

<Spring
          delay={300}
          immediate={window.innerWidth < 768}
          from={{ opacity: 0, transform: "translateX(200px)" }}
          to={
            props.active[4]
              ? { opacity: 1, transform: "translateX(0)" }
              : { opacity: 0 }
          }
          config={{ mass: 1, tension: 280, friction: 80 }}
        >
          {props => (
        <div className="row justify-content-center mb-5 slideIn" style={window.innerWidth > 768 ? props : null}>
          <div className="col-sm-12 col-md-9 col-lg-7 mb-4">
            <div className={classes.Dropdown}>
              <h6>Integer et ipsum</h6>
              <p>IPSUM</p>
              <span>&rsaquo;</span>
            </div>
            <div className={classes.Dropdown}>
              <h6>Integer et ipsum</h6>
              <p>IPSUM</p>
              <span>&rsaquo;</span>
            </div>
            <div className={`${classes.Dropdown} ${classes.Last}`}>
              <h6>Integer et ipsum</h6>
              <p>IPSUM</p>
              <span>&rsaquo;</span>
            </div>
          </div>
        </div>
          )}
          </Spring>
          <Spring
          immediate={window.innerWidth < 768}
          from={{ opacity: 0, transform: "translateY(30px)" }}
          to={
            props.active[5]
              ? { opacity: 1, transform: "translateX(0)" }
              : { opacity: 0 }
          }
          config={{ mass: 1, tension: 280, friction: 80 }}
        >
          {props => (
        <div className={`${classes.Background} slideIn`} style={window.innerWidth > 768 ? props : null}>
         <img src={bImage} alt=""/>
        </div>
          )}
          </Spring>
      </div>
    </section>
  );
};

export default SectionThird;
